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

import com.app.SMGSystemBackendSpringBoot.service.IQueryService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/queries") 
public class QueryController {

	@Autowired
	private IQueryService queryService;

	@GetMapping
	public ResponseEntity<?> getAllQueries(){
		return ResponseEntity.ok(queryService.getAllQueries());
	}

	@GetMapping("/{queryId}")
	public ResponseEntity<?> getQueryById(@PathVariable int queryId){
		return ResponseEntity.ok(queryService.getQueryById(queryId));
	}

	//to update answer for query(one by admin)
	@PutMapping("/updateAnswer/{queryId}")
	public ResponseEntity<?> updateAnswer(@PathVariable int queryId, @RequestBody String updatedAnswer){
		return ResponseEntity.ok(queryService.updateAnswer(queryId, updatedAnswer));
	}

	//to add Question (done by student & mentor)
	@PostMapping("/addQuestion")
	public ResponseEntity<?> addQuestion(@RequestBody String question){
		return ResponseEntity.ok(queryService.addQuestion(question));
	}

	//to update question (done by student & mentor)
	@PutMapping("/updateQuestion/{queryId}")
	public ResponseEntity<?> updateQuestion(@PathVariable int queryId, @RequestBody String updatedQuestion){
		return ResponseEntity.ok(queryService.updateQuestion(queryId, updatedQuestion));
	}

	//to delete question (done by admin, student & mentor
	@DeleteMapping("/deleteQuestion/{queryId}")
	public ResponseEntity<?> deleteQuestion(@PathVariable int queryId){
		return ResponseEntity.ok(queryService.deleteQuestion(queryId));
	}

	//to delete answer (done by admin)
	@PutMapping("/deleteAnswer/{queryId}") //making answer null so using PUT request
	public ResponseEntity<?> deleteAnswer(@PathVariable int queryId){
		return ResponseEntity.ok(queryService.deleteAnswer(queryId));
	}
}
