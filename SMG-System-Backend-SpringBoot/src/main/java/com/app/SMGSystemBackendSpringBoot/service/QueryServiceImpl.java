package com.app.SMGSystemBackendSpringBoot.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.SMGSystemBackendSpringBoot.exceptions.ResourceNotFoundException;
import com.app.SMGSystemBackendSpringBoot.pojo.Query;
import com.app.SMGSystemBackendSpringBoot.respository.QueryRepository;

@Service
@Transactional
public class QueryServiceImpl implements IQueryService {

	@Autowired
	QueryRepository queryRepository;

	@Override
	public List<Query> getAllQueries() {
		return queryRepository.findAll();
	}

	@Override
	public Query getQueryById(int queryId) {
		return queryRepository.findById(queryId).orElseThrow(() -> new ResourceNotFoundException("No such Query Found!"));
	}


	//to update answer (done by admin)
	@Override
	public String updateAnswer(int queryId, String updatedAnswer) {
		Query query = queryRepository.findById(queryId).orElseThrow(() -> new ResourceNotFoundException("No Scuh Query Found!"));

		//assign answer to query
		query.setAnswer(updatedAnswer);

		//save query(with answer) in Db
		queryRepository.save(query);
		return "Answer for Query Id: " + query.getQueryId() + " updated!";
	}


	//to add question (done by student & mentor)
	@Override
	public String addQuestion(String question) {

		//creating a blank object of Query
		Query query = new Query();

		//assign question to query
		query.setQuestion(question);

		//save query in DB
		queryRepository.save(query);
		return "Question added at Query Id: " + query.getQueryId() +"!";
	}


	//to update question (done by stduent & mentor)
	@Override
	public String updateQuestion(int queryId, String updatedQuestion) {

		//finding query to be updated using queryId
		Query query = queryRepository.findById(queryId).orElseThrow(() -> new ResourceNotFoundException("No Query found!"));

		//assign updated Quetion to query
		query.setQuestion(updatedQuestion);

		//save query to DB
		queryRepository.save(query);
		return "Question with Query Id: " + query.getQueryId() + " updated!";
	}


	//to delete question (done by admin, student & mentor)
	@Override
	public String deleteQuestion(int queryId) {
		//finding query to be updated using queryId
		Query query = queryRepository.findById(queryId).orElseThrow(() -> new ResourceNotFoundException("No Query found!"));

		//deleting query from DB
		queryRepository.delete(query);
		return "Question with Query Id: " + queryId + " deleted!";
	}


	//to delete(making null) answer (done by admin)
	@Override
	public String deleteAnswer(int queryId) {
		//finding query to be updated using queryId
		Query query = queryRepository.findById(queryId).orElseThrow(() -> new ResourceNotFoundException("No Query found!"));

		//assigning null to query as answer instead of deleting it from DB
		query.setAnswer(null);

		//save query to DB
		queryRepository.save(query);
		return "Answer with Query Id: " + queryId + " deleted!";
	}
}

