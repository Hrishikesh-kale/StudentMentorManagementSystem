package com.app.SMGSystemBackendSpringBoot.service;

import com.app.SMGSystemBackendSpringBoot.pojo.User;

public interface IUserService {
	
	//to get admin by email and password
	public Object authenticateUser(User user);
}
