package com.app.SMGSystemBackendSpringBoot.pojo;

import java.time.LocalDate; 

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Value;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "students")
public class Student {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer studentId;

	@Column(name = "student_fname")
	private String studentFirstName;

	@Column(name="student_lname")
	private String studentLastName;

	@Column(name="student_email")
	private String studentEmail;

	@Column(name="student_password")
	private String studentPassword;

	@Column(name="student_mobile_no")
	private String studentMobileNo;

	@Column(name="student_dob")
	private LocalDate studentDob;

	@Column(name="student_gender")
	private Gender studentGender;

	@Column(name="student_marks")
	private float studentMarks;
	
	@Column(name="student_attendance",nullable = false)
	private int studentattendance;
	
	@ManyToOne 
	@JoinColumn(name="student_course_id")
	@JsonIgnoreProperties("studentsList")
	@JsonIgnore 
	private Course assignedStudentCourse;

	@OneToOne(cascade = CascadeType.ALL , orphanRemoval = true)
	@JoinColumn(name = "student_address_id", referencedColumnName = "address_id", insertable = true, updatable = true)
	@JsonIgnore
	private Address studentAddress;

	@ManyToOne
	@JoinColumn(name="assigned_mentor_id", nullable = true)
	@JsonIgnoreProperties("studentsList")
	@JsonIgnore
	private Mentor assignedMentor;

	public Student() {
		System.out.println("In Student's para-less Constructor!");
	}

	

	public Student(Integer studentId, String studentFirstName, String studentLastName, String studentEmail,
			String studentPassword, String studentMobileNo, LocalDate studentDob, Gender studentGender,
			float studentMarks, int studentattendance, Course assignedStudentCourse, Address studentAddress,
			Mentor assignedMentor) {
		super();
		this.studentId = studentId;
		this.studentFirstName = studentFirstName;
		this.studentLastName = studentLastName;
		this.studentEmail = studentEmail;
		this.studentPassword = studentPassword;
		this.studentMobileNo = studentMobileNo;
		this.studentDob = studentDob;
		this.studentGender = studentGender;
		this.studentMarks = studentMarks;
		this.studentattendance = studentattendance;
		this.assignedStudentCourse = assignedStudentCourse;
		this.studentAddress = studentAddress;
		this.assignedMentor = assignedMentor;
	}



	public int getStudentattendance() {
		return studentattendance;
	}



	public void setStudentattendance(int studentattendance) {
		this.studentattendance = studentattendance;
	}



	public Integer getStudentId() { return studentId; }

	public void setStudentId(Integer studentId) { this.studentId = studentId; }

	public String getStudentFirstName() { return studentFirstName; }

	public void setStudentFirstName(String studentFirstName) {
		this.studentFirstName = studentFirstName; }

	public String getStudentLastName() { return studentLastName; }

	public void setStudentLastName(String studentLastName) { this.studentLastName
		= studentLastName; }

	public String getStudentEmail() { return studentEmail; }

	public void setStudentEmail(String studentEmail) { this.studentEmail =
			studentEmail; }

	public String getStudentPassword() { return studentPassword; }

	public void setStudentPassword(String studentPassword) { this.studentPassword
		= studentPassword; }

	public String getStudentMobileNo() { return studentMobileNo; }

	public void setStudentMobileNo(String studentMobileNo) { this.studentMobileNo =
			studentMobileNo; }

	public LocalDate getStudentDob() { return studentDob; }

	public void setStudentDob(LocalDate studentDob) { this.studentDob =
			studentDob; }

	public Gender getStudentGender() { return studentGender; }

	public void setStudentGender(Gender studentGender) { this.studentGender =
			studentGender; }

	public float getStudentMarks() { return studentMarks; }

	public void setStudentMarks(float studentMarks) { this.studentMarks =
			studentMarks; }

	public Course getAssignedStudentCourse() {
		return assignedStudentCourse;
	}

	public void setAssignedStudentCourse(Course assignedStudentCourse) {
		this.assignedStudentCourse = assignedStudentCourse;
	}

	public Address getStudentAddress() {
		return studentAddress;
	}

	public void setStudentAddress(Address studentAddress) {
		this.studentAddress = studentAddress;
	}

	public Mentor getAssignedMentor() {
		return assignedMentor;
	}

	public void setAssignedMentor(Mentor assignedMentor) {
		this.assignedMentor = assignedMentor;
	}



	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", studentFirstName=" + studentFirstName + ", studentLastName="
				+ studentLastName + ", studentEmail=" + studentEmail + ", studentPassword=" + studentPassword
				+ ", studentMobileNo=" + studentMobileNo + ", studentDob=" + studentDob + ", studentGender="
				+ studentGender + ", studentMarks=" + studentMarks + ", studentattendance=" + studentattendance
				+ ", assignedStudentCourse=" + assignedStudentCourse + ", studentAddress=" + studentAddress
				+ ", assignedMentor=" + assignedMentor + "]";
	}

	
}
