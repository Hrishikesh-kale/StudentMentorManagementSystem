package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List;

import com.app.SMGSystemBackendSpringBoot.pojo.Admin;

public interface IAdminService {
	
	//to add admin
	public Admin addAdmin(Admin newAdmin);
	
	//to get admin by id
	public Admin getAdminById(int adminId);
	
	//to get all admins
	public List<Admin> getAllAdmins();
	
	//to delete admin by id
	public String deleteAdminById(int adminId);
	
	//to update admin by id
	public String updateAdmin(int adminId, Admin admin);
	
	//to get list of all mentors
	public List<?> getAllMentors();
	
	//to get list of all students
	public List<?> getAllStudents();
}
