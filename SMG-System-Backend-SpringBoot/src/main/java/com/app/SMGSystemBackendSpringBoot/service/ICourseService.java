package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List;

import com.app.SMGSystemBackendSpringBoot.pojo.Course;

public interface ICourseService {
	// to add new course 
	public Course addNewCourse(Course newCourse);

	// to get Course summery by Id
	public Course getCourseById(int courseId);

	// to get all courses
	public List<Course>getAllCourses();

	// to delete Course by CourseId
	public String deleteById(int courseId);

	// to update the course in table
	public Course updateCourse (int courseId, Course updatedCourse);

	Course getCourseByStudentId(int studentId);

	Course getCourseByMentorId(int mentorId);
	
	
}
