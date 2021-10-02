package com.app.SMGSystemBackendSpringBoot.respository;

import java.util.List; 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.SMGSystemBackendSpringBoot.pojo.Mentor;
import com.app.SMGSystemBackendSpringBoot.pojo.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer>{

	//for getting students assigned to particular students
	@Query("select s from Student s join Mentor m on s.assignedMentor = m.mentorId where m.mentorId =:mentorId")
	public List<Student> getAssignedStudents(@Param("mentorId") int mentorId);

	//to find student by email & password (to authenticate student)
	@Query("select s from Student s where s.studentEmail =:email and s.studentPassword =:password")
	public Student findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	//to get student with assignedMentor (for admin)
	@Query("select s, m.mentorFirstName, m.mentorLastName, m.mentorEmail from Student s join Mentor m"
			+ " on s.assignedMentor = m.mentorId")
	public List<?> findStudentAndMentor();

	// to get Mentor Details from studentId
	@Query("select m from Mentor m join Student s on s.assignedMentor = m.mentorId where s.studentId=:studentId ")
	public Mentor findMentorByStudentId(@Param("studentId") int  studentId);
	
	//to get student by email for validation
	@Query("select s from Student s where s.studentEmail =:email")
	public List<Student> findByEmail(@Param("email") String studentEmail);
}
