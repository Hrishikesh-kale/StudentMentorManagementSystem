package com.app.SMGSystemBackendSpringBoot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.SMGSystemBackendSpringBoot.pojo.User;
import com.app.SMGSystemBackendSpringBoot.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	IUserService userService;
	
	@PostMapping
	public ResponseEntity<?> authenticateUser(@RequestBody User user){
		return ResponseEntity.ok(userService.authenticateUser(user));
	}
}
