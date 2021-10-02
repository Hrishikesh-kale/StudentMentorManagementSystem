package com.app.SMGSystemBackendSpringBoot.controller;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.SMGSystemBackendSpringBoot.pojo.Admin;
import com.app.SMGSystemBackendSpringBoot.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private IAdminService adminService;
	
	
	//to add admin 
	@PostMapping
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin newAdmin){
		return ResponseEntity.ok(adminService.addAdmin(newAdmin));
	}
	
	
	//to get admin id
	@GetMapping("/{id}")
	public ResponseEntity<Admin> getDetailsById(@PathVariable int id){
		return ResponseEntity.ok(adminService.getAdminById(id));
	}
	
	
	//to get all list of all admins
	@GetMapping
	public ResponseEntity<?> getAllAdmins(){
		return ResponseEntity.ok(adminService.getAllAdmins());
	}
	
	
	//to delete admin by id
	@DeleteMapping("/{adminId}")
	public ResponseEntity<?> deleteAdminById(@PathVariable int adminId){
		return ResponseEntity.ok(adminService.deleteAdminById(adminId));
	}
	
	
	//to update admin
	@PutMapping("/{adminId}")
	public ResponseEntity<?> updateAdmin(@PathVariable int adminId, @RequestBody Admin admin){
		return ResponseEntity.ok(adminService.updateAdmin(adminId, admin));
	}
	
	
	//to get list of all mentors
	@GetMapping("/mentors")
	public ResponseEntity<?> getAllMentors(){
		return ResponseEntity.ok(adminService.getAllMentors());
	}
	
	//to get list of all students
	@GetMapping("/students")
	public ResponseEntity<?> getAllStudents(){
		return ResponseEntity.ok(adminService.getAllStudents());
	}
}
