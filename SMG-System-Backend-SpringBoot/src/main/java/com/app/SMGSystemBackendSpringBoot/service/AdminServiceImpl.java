package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List; 

import javax.transaction.Transactional; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.SMGSystemBackendSpringBoot.exceptions.ResourceNotFoundException;
import com.app.SMGSystemBackendSpringBoot.pojo.Admin;
import com.app.SMGSystemBackendSpringBoot.respository.AdminRepository;
import com.app.SMGSystemBackendSpringBoot.respository.MentorRepository;
import com.app.SMGSystemBackendSpringBoot.respository.StudentRepository;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private StudentRepository studentRespository;
	
	@Autowired
	private MentorRepository mentorRepository;
	
	
	//to add admin
	@Override
	public Admin addAdmin(Admin newAdmin) {
		
		//get admin by email
		Admin admin = adminRepository.findByEmail(newAdmin.getAdminEmail());
		if(admin == null) 
			return adminRepository.save(newAdmin);
		else
			throw new ResourceNotFoundException("Admin already exists with email id : " + newAdmin.getAdminEmail());
	}

	
	//to get admin by Id
	@Override
	public Admin getAdminById(int adminId) {
		return adminRepository.findById(adminId).orElseThrow(() -> new ResourceNotFoundException("Invalid Admin ID!") );
	}


	//to get list of all admins
	@Override
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}


	//to delete admin by id
	@Override
	public String deleteAdminById(int adminId) {
	Admin admin = adminRepository.findById(adminId).orElseThrow(() -> new ResourceNotFoundException("No Admin Found!"));
		adminRepository.delete(admin);
		return "Admin with Id: " + adminId + " deleted!";
	}


	//to update admin
	@Override
	public String updateAdmin(int adminId, Admin admin) {
		
		//get existingAdmin from by adminId
		Admin existingAdmin = adminRepository.findById(adminId).orElseThrow(() -> new ResourceNotFoundException("No Admin Found!"));
		
		//set admin's fields to the existingAdmin
		existingAdmin.setAdminEmail(admin.getAdminEmail());
		existingAdmin.setAdminPassword(admin.getAdminPassword());
		existingAdmin.setAdminDob(admin.getAdminDob());
		existingAdmin.setAdminGender(admin.getAdminGender());
		
		//save admin in DB
		adminRepository.save(existingAdmin);
		return "Admin with Id: " + adminId + " updated!";
	}

	
	//to get list of all mentors
	@Override
	public List<?> getAllMentors() {
		return mentorRepository.findAll();
	}


	//to get list of all students
	@Override
	public List<?> getAllStudents() {
		return studentRespository.findStudentAndMentor();
	}
}
