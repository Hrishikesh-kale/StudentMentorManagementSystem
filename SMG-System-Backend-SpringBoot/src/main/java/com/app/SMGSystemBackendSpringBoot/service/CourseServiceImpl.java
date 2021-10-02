package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.SMGSystemBackendSpringBoot.exceptions.ResourceNotFoundException;
import com.app.SMGSystemBackendSpringBoot.pojo.Course;
import com.app.SMGSystemBackendSpringBoot.respository.CourseRepository;

@Service
@Transactional
public class CourseServiceImpl implements ICourseService {

	@Autowired
	CourseRepository courseRepository;

	@Override
	public Course addNewCourse(Course newCourse) {
		return courseRepository.save(newCourse);
	}

	@Override
	public Course getCourseById(int courseId) {
		return courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Course ID!"));
	}

	@Override
	public List<Course> getAllCourses() {
		return courseRepository.findAll();
	}

	@Override
	public String deleteById(int courseId) {
		Course course = courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Course Id...!!!"));
		String msg = "Course with ID: " + course.getCourseId() + " deleted!";
		courseRepository.deleteById(courseId);
		return msg;
	}

	@Override
	public Course updateCourse(int courseId, Course updatedCourse) {
		Course existingCourse =courseRepository.findById(courseId).orElseThrow(() -> new ResourceNotFoundException("Invalid Course Id...!!!"));
		existingCourse.setCourseName(updatedCourse.getCourseName());
		existingCourse.setStartDate(updatedCourse.getStartDate());
		existingCourse.setEndDate(updatedCourse.getEndDate());
		return courseRepository.save(existingCourse);
	}


	//get course details from studentId
	@Override
	public Course getCourseByStudentId(int studentId) {
		Course course = courseRepository.findCourseByStudentId(studentId);
		if(course == null)
			throw new ResourceNotFoundException("No course Assigned..!!");
		return course;
	}

	//get course details from mentorId
	@Override
	public Course getCourseByMentorId(int mentorId) {
		Course course = courseRepository.findCourseByMentorId(mentorId);
		if(course == null)
			throw new ResourceNotFoundException("No course Assigned..!!");
		return course;
	}

}
