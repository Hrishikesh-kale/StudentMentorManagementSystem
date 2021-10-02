package com.app.SMGSystemBackendSpringBoot.pojo;

import java.time.LocalDate; 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer adminId;

	@Column
	private String adminEmail;

	@Column
	private String adminPassword;

	@Column
	private LocalDate adminDob;

	@Column
	private Gender adminGender;
	
	public Admin() {
		System.out.println("In Admin's para-less Constructor!");
	}

	public Admin(String adminEmail, String adminPassword, LocalDate adminDob, Gender adminGender) {
		super();
		this.adminEmail = adminEmail;
		this.adminPassword = adminPassword;
		this.adminDob = adminDob;
		this.adminGender = adminGender;
		
		System.out.println("In Admin's parameterized Constructor!");
	}

	public Integer getAdminId() {
		return adminId;
	}

	public void setAdminId(Integer adminId) {
		this.adminId = adminId;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getAdminPassword() {
		return adminPassword;
	}

	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}

	public LocalDate getAdminDob() {
		return adminDob;
	}

	public void setAdminDob(LocalDate adminDob) {
		this.adminDob = adminDob;
	}

	public Gender getAdminGender() {
		return adminGender;
	}

	public void setAdminGender(Gender adminGender) {
		this.adminGender = adminGender;
	}

	@Override
	public String toString() {
		return "Admin [adminId=" + adminId + ", adminEmail=" + adminEmail + ", adminPassword=" + adminPassword
				+ ", adminDob=" + adminDob + ", adminGender=" + adminGender + "]";
	}

	
}
