package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.SMGSystemBackendSpringBoot.dto.MentorAddressDTO;
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
public class MentorSericeImpl implements IMentorService {

	@Autowired
	private StudentRepository studentRespository;

	@Autowired
	private MentorRepository mentorRepository;

	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private CourseRepository courseRepository;

	@Override
	public List<?> getAssignedStudents(int mentorId) {


		//get mentor using mentorId
		Mentor mentor = mentorRepository.findById(mentorId).orElseThrow(() -> new ResourceNotFoundException("No Mentor Found!"));

		if(mentor == null)
			throw new ResourceNotFoundException("Mentor not Registered!");

		//to get students assigned to particular mentorId
		List<Student> studentList = studentRespository.getAssignedStudents(mentorId);

		//if studentList is empty throw exception
		if(studentList.isEmpty())
			throw new ResourceNotFoundException("No student assigned!");

		//System.out.println(studentList);
		return studentList;
	}


	//to update marks of students
	@Override
	public String updateMarksOfStudent(int studentId, float studentMarks) {

		//get student using studentId
		Student student = studentRespository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("Student not found!"));

		if(studentMarks > 100)
			return "Marks should not be greater than 100!";

		//set new marks to student
		student.setStudentMarks(studentMarks);

		//save student in DB
		studentRespository.save(student);

		return "Marks updated successfully";
	}
	
	//to update attendance of students
		@Override
		public String updateAttendanceOfStudent(int studentId, int studentattendance) {

			//get student using studentId
			Student student = studentRespository.findById(studentId).orElseThrow(() -> new ResourceNotFoundException("Student not found!"));

			if(studentattendance > 90)
				return "Attendance should not be greater than 90 days!";

			//set new attendance to student
			student.setStudentattendance(studentattendance);

			//save student in DB
			studentRespository.save(student);

			return "Attendance updated successfully";
		}
	//to update mentor
	@Override
	public Mentor updateMentor(int mentorId, Mentor newMentor) {

		//get mentor to be updated
		Mentor mentor = mentorRepository.findById(mentorId).orElseThrow(() -> new ResourceNotFoundException("Mentor Does Not Exist"));
		/*
		 * String mentorEmail = newMentor.getMentorEmail(); List<Mentor>
		 * listOfAvailableMentors = mentorRepository.findByEmail(mentorEmail);
		 * System.out.println("List of Avilable Mentors:-" + listOfAvailableMentors);
		 * if(!listOfAvailableMentors.isEmpty()) throw new
		 * ResourceNotFoundException("User Already Exists!");
		 */
		//get newMentor from mentorAddreddDto
		//Mentor newMentor = mentorAddressDto.getMentor();
		
		//get newAddress from mentorAddressDto
		//Address newAddress = mentorAddressDto.getAddress();
		
		//saving newAddress in DB
	//	addressRepository.save(newAddress);
		
		//assign newAddress to mentor
		//newMentor.setMentorAddress(newAddress);
		
		//setting all the fields of newMentor to mentor to be updated
		mentor.setMentorFirstName(newMentor.getMentorFirstName());
		mentor.setMentorLastName(newMentor.getMentorLastName());
		mentor.setMentorEmail(newMentor.getMentorEmail());
		mentor.setMentorPassword(newMentor.getMentorPassword());
		mentor.setMentorMoNo(newMentor.getMentorMoNo());
		mentor.setMentorDob(newMentor.getMentorDob());
		mentor.setMentorGender(newMentor.getMentorGender());
		mentor.setMentorJoinYear(newMentor.getMentorJoinYear());
		mentor.setAvgRating(newMentor.getAvgRating());

		
		
		//saving mentor in DB
		mentorRepository.save(mentor);
		return mentor;
	}


	//to get mentor by Id
	@Override
	public Mentor getMentorById(int mentorId) {
		Mentor mentor = mentorRepository.findById(mentorId).orElseThrow(() -> new ResourceNotFoundException("No such mentor exist"));
		return mentor;
	}


	//to delete mentor by Id
	@Override
	public String deleteMentorById(int mentorId) {

		//to get list of students assigned to mentor with mentorId
		List<Student> studentList = studentRespository.getAssignedStudents(mentorId);

		//if no student is assigned to the mentor
		if(studentList.isEmpty())

			//delete that mentor
			mentorRepository.deleteById(mentorId);

		//if one or more students are assigned to mentor
		else {
			//iterating over the studentList
			for(Student student : studentList) {

				//setting mentor of each student to null
				student.setAssignedMentor(null);

				//saving student(with mentor : null) in DB
				studentRespository.save(student);
			}

			//deleting mentor with mentorId
			mentorRepository.deleteById(mentorId);
		}
		return "Mentor with Id: " + mentorId + " has been deleted successfuly";
	}


	//to register mentor with address
	@Override
	public String registerMentor(int courseId, MentorAddressDTO mentorAddressDto) {

		//get course using courseId
		Course newCourse = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("no Such Course Available.."));

		//get mentor object from mentorAddressDto
		Mentor newMentor = mentorAddressDto.getMentor();

		//to get mentor by email for validation
		List<Mentor> mentorList = mentorRepository.findByEmail(newMentor.getMentorEmail());

		if(!mentorList.isEmpty())
			throw new ResourceNotFoundException("Mentor with provided Email Id already exists");

		else {

			//get address object from mentorAddressDto
			Address newAddress = mentorAddressDto.getAddress();

			System.out.println(newAddress);

			//store newAddress in DB
			addressRepository.save(newAddress);

			//assign newAddress to newMentor
			newMentor.setMentorAddress(newAddress);

			//set newCourse(stored in DB) to newMentor
			newMentor.setAssignedMentorCourseId(newCourse);

			//store newMentor in DB
			mentorRepository.save(newMentor);
		}
		return "Mentor registered with Mentor Id: " + newMentor.getMentorId() + " and Address Id: " + newMentor.getMentorAddress().getAddressId() + " !";
	}


	//to get Address Details of Student By StudentId
	@Override
	public Address getAddressByMentorId(int mentorId) {
		Address address = addressRepository.findAddressByMentorId(mentorId);
		if(address == null)
			throw new ResourceNotFoundException("No Mentor Address Found");
		return address;
	}


	@Override
	public List<Mentor> getAllMentors() {
		return mentorRepository.findAll();
	}
}
