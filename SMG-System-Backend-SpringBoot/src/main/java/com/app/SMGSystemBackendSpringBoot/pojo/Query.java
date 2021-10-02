package com.app.SMGSystemBackendSpringBoot.pojo;

import javax.persistence.Column; 
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "queries")
public class Query {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer queryId;

	@Column 
	private String question;

	@Column(nullable = true)
	private String answer;

	public Query() {
		System.out.println("In Query's para-less Constructor!");
	}

	public Query(String question, String answer) {
		super();
		this.question = question;
		this.answer = answer;

		System.out.println("In Query's parameterized Constructor!");
	}

	public Integer getQueryId() {
		return queryId;
	}

	public void setQueryId(Integer queryId) {
		this.queryId = queryId;
	}

	public String getQuestion() { return question; }

	public void setQuestion(String question) { this.question = question; }

	public String getAnswer() { return answer; }

	public void setAnswer(String answer) { this.answer = answer; }

	@Override
	public String toString() {
		return "Query [id=" + queryId + ", question=" + question + ", answer=" + answer + "]";
	}
}
