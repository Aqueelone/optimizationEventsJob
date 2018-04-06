package com.acceptic.java.test.repository;

import com.acceptic.java.test.domain.BlackListRecord;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the BlackListRecord entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BlackListRecordRepository extends JpaRepository<BlackListRecord, Long> {

}
