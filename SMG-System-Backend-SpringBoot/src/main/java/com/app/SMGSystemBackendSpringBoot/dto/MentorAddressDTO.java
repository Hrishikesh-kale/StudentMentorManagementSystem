package com.app.SMGSystemBackendSpringBoot.dto;

import com.app.SMGSystemBackendSpringBoot.pojo.Address;
import com.app.SMGSystemBackendSpringBoot.pojo.Mentor;

public class MentorAddressDTO {
	private Mentor mentor;
	private Address address;
	
	public MentorAddressDTO() {
	System.out.println("In MentorAddress' DTO constructor!");
}

	public Mentor getMentor() {
		return mentor;
	}

	public void setMentor(Mentor mentor) {
		this.mentor = mentor;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}
}
