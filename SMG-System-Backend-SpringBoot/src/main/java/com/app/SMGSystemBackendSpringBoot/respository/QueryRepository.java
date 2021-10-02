package com.app.SMGSystemBackendSpringBoot.respository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.SMGSystemBackendSpringBoot.pojo.Query;

@Repository
public interface QueryRepository extends JpaRepository<Query, Integer> {

}
