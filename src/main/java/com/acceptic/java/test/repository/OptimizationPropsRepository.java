package com.acceptic.java.test.repository;

import com.acceptic.java.test.domain.OptimizationProps;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OptimizationProps entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OptimizationPropsRepository extends JpaRepository<OptimizationProps, Long> {

}
