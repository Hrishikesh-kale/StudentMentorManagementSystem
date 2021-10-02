package com.app.SMGSystemBackendSpringBoot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.SMGSystemBackendSpringBoot.dto.StudentAddressDTO;
import com.app.SMGSystemBackendSpringBoot.pojo.Student;
import com.app.SMGSystemBackendSpringBoot.service.IStudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentController {

	@Autowired
	private IStudentService studentService;

	// register new student and its' address
	@PostMapping("/{courseId}")
	public ResponseEntity<String> registerStudent(@PathVariable int courseId,
			@RequestBody StudentAddressDTO studentAddressDto) {
		// System.out.println(studentAddressDto.getStudent() + ", " +
		// studentAddressDto.getAddress());
		return ResponseEntity.ok(studentService.registerStudent(courseId, studentAddressDto));
	}

	// get list of registered students
	@GetMapping
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}

	// get student by it's student ID
	@GetMapping("/{studentId}")
	public ResponseEntity<Student> getStudentById(@PathVariable int studentId) {
		Student student = studentService.getStudentById(studentId);
		return ResponseEntity.ok(student);
	}

	// update student
	@PutMapping("/{studentId}")
	public ResponseEntity<String> updateStudent(@PathVariable int studentId, @RequestBody Student newStudent) {
		return ResponseEntity.ok(studentService.updateStudent(studentId, newStudent));
	}

	// delete student by it's student ID
	@RequestMapping(value = "/{studentId}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteStudent(@PathVariable int studentId) {
		return ResponseEntity.ok(studentService.deleteStudentById(studentId));
	}

	// assign mentor to student
	@GetMapping("/assignMentor/{studentId}")
	public ResponseEntity<?> assignMentorToStudent(@PathVariable int studentId) {
		return ResponseEntity.ok(studentService.assignMentorToStudent(studentId));
	}

	// get address details of Student from StudentId
	@GetMapping("/address/{studentId}")
	public ResponseEntity<?> getAddressByStudentId(@PathVariable int studentId) {
		return ResponseEntity.ok(studentService.getAddressByStudentId(studentId));
	}

	// get Mentor details of selected Student from StudentId
	@GetMapping("/mentor/{studentId}")
	public ResponseEntity<?> getMentorsByStudentId(@PathVariable int studentId) {
		return ResponseEntity.ok(studentService.getMentorByStudentId(studentId));
	}

	// get Mentors'Address details of selected Student from StudentId // note:- here
	// we are getting address
	@GetMapping("/mentor/address/{studentId}")
	public ResponseEntity<?> getMentorsAddressByStudentId(@PathVariable int studentId) {
		return ResponseEntity.ok(studentService.getAssignedMentorsAddressByStudentId(studentId));
	}

	// update Marks
	@PutMapping("/marks/{studentId}/{newMarks}")
	public ResponseEntity<?> updateMarks(@PathVariable int studentId, @PathVariable int newMarks) {
		return ResponseEntity.ok(studentService.updateMarks(studentId, newMarks));
	}

	// update Marks
	@PutMapping("/attendance/{studentId}/{newAttendance}")
	public ResponseEntity<?> updateAttendance(@PathVariable int studentId, @PathVariable int newAttendance) {
		return ResponseEntity.ok(studentService.updateAttendance(studentId, newAttendance));
	}

}
