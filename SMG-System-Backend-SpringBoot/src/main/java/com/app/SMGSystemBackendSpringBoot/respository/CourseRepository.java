package com.app.SMGSystemBackendSpringBoot.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.SMGSystemBackendSpringBoot.pojo.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer>{

	// to get course Details from studentId
	@Query("select c from Course c join Student s on s.assignedStudentCourse = c.courseId where s.studentId=:studentId ")
	Course findCourseByStudentId(@Param("studentId") int  studentId);

	// to get course Details from mentorId
	@Query("select c from Course c join Mentor m on m.assignedMentorCourseId = c.courseId where m.mentorId=:mentorId ")
	Course findCourseByMentorId(@Param("mentorId") int  mentorId);
}
 