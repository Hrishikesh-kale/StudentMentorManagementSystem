package com.app.SMGSystemBackendSpringBoot.pojo;

import javax.persistence.Column; 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "addresses")
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id", nullable = true)
	private Integer addressId;

	@Column(name = "address_line1")
	private String addressLine1;

	@Column(name = "address_line2")
	private String addressLine2;

	@Column
	private String area; 

	@Column
	private String city;

	@Column
	private String state;

	@Column
	private String country;

	@Column(name = "pin_code")
	private int pinCode;

	public Address() {
		System.out.println("In Address's para-less Constructor!");
	}

	public Address(String addressLine1, String addressLine2,
			String area, String city, String state, String country, int pinCode) {
		super();
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.area = area;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pinCode = pinCode;

		System.out.println("In Address's parameterized Constructor!");
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public String getAddressLine1() { return addressLine1; }

	public void setAddressLine1(String addressLine1) { this.addressLine1 =
			addressLine1; }

	public String getAddressLine2() { return addressLine2; }

	public void setAddressLine2(String addressLine2) { this.addressLine2 =
			addressLine2; }

	public String getArea() { return area; }

	public void setArea(String area) { this.area = area; }

	public String getCity() { return city; }

	public void setCity(String city) { this.city = city; }

	public String getState() { return state; }

	public void setState(String state) { this.state = state; }

	public String getCountry() { return country; }

	public void setCountry(String country) { this.country = country; }

	public int getPinCode() { return pinCode; }

	public void setPinCode(int pinCode) { this.pinCode = pinCode; }

	@Override
	public String toString() {
		return "Address [id=" + addressId + ", addressLine1=" + addressLine1 + ", addressLine2=" + addressLine2 + ", area=" + area + ", city="
				+ city + ", state=" + state + ", country=" + country + ", pinCode=" + pinCode + "]";
	}
}
