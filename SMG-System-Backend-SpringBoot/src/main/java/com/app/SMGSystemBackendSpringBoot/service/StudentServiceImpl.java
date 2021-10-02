package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List;  

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.SMGSystemBackendSpringBoot.dto.StudentAddressDTO;
import com.app.SMGSystemBackendSpringBoot.exceptions.ResourceNotFoundException;
import com.app.SMGSystemBackendSpringBoot.pojo.Address;
import com.app.SMGSystemBackendSpringBoot.pojo.Course;
import com.app.SMGSystemBackendSpringBoot.pojo.Mentor;
import com.app.SMGSystemBackendSpringBoot.pojo.Student;
import com.app.SMGSystemBackendSpringBoot.respository.AddressRepository;
import com.app.SMGSystemBackendSpringBoot.respository.CourseRepository;
import com.app.SMGSystemBackendSpringBoot.respository.MentorRepository;
import com.app.SMGSystemBackendSpringBoot.respository.StudentRepository;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private MentorRepository mentorRepository;

	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private CourseRepository courseRepository;


	//register new student
	@Override
	public String registerStudent(int courseId, StudentAddressDTO studentAddressDto) {
		System.out.println(studentAddressDto.getStudent() + ", " + studentAddressDto.getAddress());

		//get course by Id
		Course course = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("No such course Avaialable!"));

		//get student object from studentAddressDto
		Student newStudent = studentAddressDto.getStudent();

		//to get student by email for validation
		List<Student> studentList = studentRepository.findByEmail(newStudent.getStudentEmail());
		if( !studentList.isEmpty())
			throw new ResourceNotFoundException("Student with provided Email Id already exists");
		else {
			//get address object from studentAddressDto 
			Address newAddress = studentAddressDto.getAddress();

			//store newAddress in DB
			addressRepository.save(newAddress);

			//assign newAddress to newStudent
			newStudent.setStudentAddress(newAddress);

			//assign course to student
			newStudent.setAssignedStudentCourse(course);

			//store newStudent in DB
			studentRepository.save(newStudent);
		}

		return "Student registered with Student Id: " + newStudent.getStudentId() + " and Address Id: " + newStudent.getStudentAddress().getAddressId() + " and Course Id: " + newStudent.getAssignedStudentCourse().getCourseId() + "!";
	}


	//get student using studentId
	@Override
	public Student getStudentById(int studentId) {
		return studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student ID!"));
	}


	//get list of all students
	@Override
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}


	//delete student using studentId
	@Override
	public String deleteStudentById(int studentId) {

		//get student to be deleted
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student Id not present!"));

		//get mentor assigned to student (to decrement currentBatch size)
		Mentor mentor = student.getAssignedMentor();

		//check if mentor was assigned to the student or not
		if(mentor == null)

			//delete student from DB
			studentRepository.delete(student);
		else {
			//if mentor is assigned to the student : decrement currentBatch size of assigned mentor
			mentor.setCurrentBatchSize(mentor.getCurrentBatchSize() - 1);

			//delete student from DB
			studentRepository.delete(student);
		}
		return "Student with Id: " + studentId + " deleted!";
	}


	//update student
	@Override
	public String updateStudent(int studentId, Student newStudent) {

		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student Id : " + studentId + " does not exists!"));
		/*
		 * String studentEmail = newStudent.getStudentEmail(); List<Student>
		 * listOfStudent = studentRepository.findByEmail(studentEmail); // if user
		 * already exist then throw exception if(!listOfStudent.isEmpty()) throw new
		 * ResourceNotFoundException("User Already Exist..!!");
		 */

		student.setStudentFirstName(newStudent.getStudentFirstName());
		student.setStudentLastName(newStudent.getStudentLastName());
		student.setStudentEmail(newStudent.getStudentEmail());
		student.setStudentPassword(newStudent.getStudentPassword());
		student.setStudentDob(newStudent.getStudentDob());
		student.setStudentMobileNo(newStudent.getStudentMobileNo());
		student.setStudentGender(newStudent.getStudentGender());
		studentRepository.save(student);
		return "Student updated!";	}


	// assign mentor to student and get list of mentors in return
	@Override
	public Mentor assignMentorToStudent(int studentId) {
		Mentor assignedMentor = null;

		// get student of given studentId and if student is not available throw
		// exception
		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student not registered!"));

		System.out.println(student);

		//check if student has already assigned mentor or not
		Mentor alreadyAssignedMentor = student.getAssignedMentor();

		//if mentor is assigned return that mentor only
		if(alreadyAssignedMentor != null)
			return alreadyAssignedMentor;

		// get courseId of above student
		int studentCourseId = student.getAssignedStudentCourse().getCourseId();

		System.out.println(studentCourseId);

		// get list of mentors having same courseId
		List<Mentor> mentorList = mentorRepository.findMentors(studentCourseId);

		// check if list is empty(no mentor available for given courseId)
		if (mentorList.isEmpty())
			throw new ResourceNotFoundException("Mentor not available for given course ID!");


		// iterating to assign mentor to student 
		for (Mentor mentor : mentorList) {

			// checking if mentor current size is less than total size given by mentor 
			if(mentor.getCurrentBatchSize() < mentor.getBatchSize()) {

				// assign mentor to student 
				student.setAssignedMentor(mentor);

				// save student in DB 
				studentRepository.save(student);

				// update current batch size of mentor
				mentor.setCurrentBatchSize(mentor.getCurrentBatchSize() + 1);

				// save mentor in DB 
				mentorRepository.save(mentor);

				assignedMentor = mentor;

				// mentor assigned : break out of the loop 
				break; 
			}

			//if mentor current size is more than total size given by mentor 
			else {

				//making that mentor null
				mentor = null;

				//continue the loop to check further mentors in mentorsList
				continue;
			} 
		}

		//if no mentor found throw exception
		if(assignedMentor == null)
			throw new ResourceNotFoundException("No Mentor available for Selected Course!");
		else
			return assignedMentor;
	}


	//to get Address Details of Student By StudentId
	@Override
	public Address getAddressByStudentId(int studentId) {
		Address address = addressRepository.findAddressByStudentId(studentId);
		if(address == null)
			throw new ResourceNotFoundException("No Student Address Found");
		return address;
	} 


	// to get Mentor of student by studentId
	@Override
	public Mentor getMentorByStudentId(int studentId) {
		Mentor mentor = studentRepository.findMentorByStudentId(studentId);

		return mentor;
	}


	// get Mentors'Address details of selected Student from StudentId  // note:- here we are getting address
	@Override
	public Address getAssignedMentorsAddressByStudentId(int studentId) {
		// get assigned Mentor from Query
		Mentor assignedMentor = studentRepository.findMentorByStudentId(studentId);
		if(assignedMentor == null)
			throw new ResourceNotFoundException("You Dont Have Any Mentor");
		// get mentor Id from Assigned mentor
		int mentorId = assignedMentor.getMentorId();
		// get details of address of assignedMentor
		Address mentorAddress = addressRepository.findAddressByMentorId(mentorId);
		return mentorAddress;
	}


	//update Marks of studentId
	@Override
	public String updateMarks(int studentId, int newMarks) {
		Student student = studentRepository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("no Such Student Available.."));
		student.setStudentMarks(newMarks);
		studentRepository.save(student);
		return "Marks Update Done";
	}
	
	//update Marks of studentId
		@Override
		public String updateAttendance(int studentId, int newAttendance) {
			Student student = studentRepository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("no Such Student Available.."));
			student.setStudentMarks(newAttendance);
			studentRepository.save(student);
			return "Attendance Update Done";
		}
}
