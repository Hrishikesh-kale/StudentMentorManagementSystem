package com.app.SMGSystemBackendSpringBoot.dto;

import com.app.SMGSystemBackendSpringBoot.pojo.Address;
import com.app.SMGSystemBackendSpringBoot.pojo.Student;

public class StudentAddressDTO {
	private Student student;
	private Address address;

	public StudentAddressDTO() {
		System.out.println("In StudentAdressDTO's para-less constructor!");
	}

	public StudentAddressDTO(Student student, Address address) {
		this.student = student;
		this.address = address;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}
