package com.app.SMGSystemBackendSpringBoot.pojo;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "mentors")
public class Mentor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer mentorId;

	@Column(name="mentor_fname")
	private String mentorFirstName;

	@Column(name="mentor_lname")
	private String mentorLastName;

	@Column(name="mentor_email")
	private String mentorEmail;

	@Column(name="mentor_password")
	private String mentorPassword;

	@Column(name="mentor_mono")
	private String mentorMoNo;

	@Column(name="batch_size")
	private int batchSize;

	@Column(name = "current_batch_size", columnDefinition = "integer default 00")
	private int currentBatchSize;

	@Column(name="mentor_dob")
	private LocalDate mentorDob;

	@Column(name="mentor_gender")
	private Gender mentorGender;

	@Column(name="mentor_join_year")
	private LocalDate mentorJoinYear;

	@Column(name="avg_rating")
	private float avgRating;

	@OneToOne(cascade = CascadeType.ALL , orphanRemoval = true)
	@JoinColumn(name = "mentor_address_id", referencedColumnName = "address_id", insertable = true, updatable = true)
	@JsonIgnore 
	private Address mentorAddress;

	@ManyToOne
	@JoinColumn(name="mentor_course_id")
	private Course assignedMentorCourseId;

	@OneToMany(mappedBy = "assignedMentor",cascade = CascadeType.ALL , orphanRemoval = true)
	@JsonIgnoreProperties("assignedMentor")
	@JsonIgnore
	private List<Student> studentsList = new ArrayList<>();

	public Mentor() {
		System.out.println("In Mentor's para-less Constructor!");
	}

	public Mentor(Integer mentorId, String mentorFirstName, String mentorLastName, String mentorEmail, String mentorPassword,
			String mentorMoNo, int batchSize, LocalDate mentorDob, Gender mentorGender, LocalDate mentorJoinYear,
			float avgRating) {
		super();
		this.mentorId = mentorId;
		this.mentorFirstName = mentorFirstName;
		this.mentorLastName = mentorLastName;
		this.mentorEmail = mentorEmail;
		this.mentorPassword = mentorPassword;
		this.mentorMoNo = mentorMoNo;
		this.batchSize = batchSize;
		this.mentorDob = mentorDob;
		this.mentorGender = mentorGender;
		this.mentorJoinYear = mentorJoinYear;
		this.avgRating = avgRating;

		System.out.println("In Mentor's parameterized Constructor!");
	}

	public Integer getMentorId() {
		return mentorId;
	}

	public void setMentorId(Integer mentorId) {
		this.mentorId = mentorId;
	}

	public String getMentorFirstName() { return mentorFirstName; }

	public void setMentorFirstName(String mentorFirstName) { this.mentorFirstName
		= mentorFirstName; }

	public String getMentorLastName() { return mentorLastName; }

	public void setMentorLastName(String mentorLastName) { this.mentorLastName =
			mentorLastName; }

	public String getMentorEmail() { return mentorEmail; }

	public void setMentorEmail(String mentorEmail) { this.mentorEmail =
			mentorEmail; }

	public String getMentorPassword() { return mentorPassword; }

	public void setMentorPassword(String mentorPassword) { this.mentorPassword =
			mentorPassword; }

	public String getMentorMoNo() { return mentorMoNo; }

	public void setMentorMoNo(String mentorMoNo) { this.mentorMoNo = mentorMoNo; }

	public int getBatchSize() { return batchSize; }

	public void setBatchSize(int batchSize) { this.batchSize = batchSize; }

	public LocalDate getMentorDob() { return mentorDob; }

	public void setMentorDob(LocalDate mentorDob) { this.mentorDob = mentorDob; }
	
	public Gender getMentorGender() { return mentorGender; }

	public void setMentorGender(Gender mentorGender) { this.mentorGender =
			mentorGender; }

	public LocalDate getMentorJoinYear() { return mentorJoinYear; }

	public void setMentorJoinYear(LocalDate mentorJoinYear) { this.mentorJoinYear
		= mentorJoinYear; }

	public float getAvgRating() { return avgRating; }

	public void setAvgRating(float avgRating) { this.avgRating = avgRating; }

	public int getCurrentBatchSize() {
		return currentBatchSize;
	}

	public void setCurrentBatchSize(int currentBatchSize) {
		this.currentBatchSize = currentBatchSize;
	}

	public Address getMentorAddress() {
		return mentorAddress;
	}

	public void setMentorAddress(Address mentorAddress) {
		this.mentorAddress = mentorAddress;
	}

	public Course getAssignedMentorCourseId() {
		return assignedMentorCourseId;
	}

	public void setAssignedMentorCourseId(Course assignedMentorCourseId) {
		this.assignedMentorCourseId = assignedMentorCourseId;	
	}

	public List<Student> getStudentsList() {
		return studentsList;
	}

	public void setStudentsList(List<Student> studentsList) {
		this.studentsList = studentsList;
	}

	@Override
	public String toString() {
		return "Mentor [id=" + mentorId + ", mentorFirstName=" + mentorFirstName + ", mentorLastName=" + mentorLastName
				+ ", mentorEmail=" + mentorEmail + ", mentorPassword=" + mentorPassword + ", mentorMoNo=" + mentorMoNo
				+ ", batchSize=" + batchSize + ", mentorDob=" + mentorDob + ", mentorGender=" + mentorGender
				+ ", mentorJoinYear=" + mentorJoinYear + ", avgRating=" + avgRating + "]";
	}

	// Helper Functions

	//to add Student in mentor table
	public void addStudent(Student student) {
		studentsList.add(student);
		student.setAssignedMentor(null);
	}

	//to remove student from mentor table
	public void removeStudent(Student student) {
		studentsList.remove(student);
		student.setAssignedMentor(null);
	}
}
