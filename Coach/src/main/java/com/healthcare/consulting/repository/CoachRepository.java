package com.healthcare.consulting.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.consulting.entity.Coach;

@Repository
public interface CoachRepository extends JpaRepository<Coach,String>{
	public Optional<Coach> findByCoachId(String coachId);
}
