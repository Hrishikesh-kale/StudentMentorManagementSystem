package com.app.SMGSystemBackendSpringBoot.pojo;

public class User {
	private String userEmail;
	private String userPassword;
	private String userRole;
	
	public User(String userEmail, String userPassword, String userRole) {
		super();
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userRole = userRole;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUseRole(String userRole) {
		this.userRole = userRole;
	}
	
	
}
