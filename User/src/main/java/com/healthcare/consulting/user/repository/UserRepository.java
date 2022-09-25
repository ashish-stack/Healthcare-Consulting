package com.healthcare.consulting.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.consulting.user.entity.User;

public interface UserRepository extends JpaRepository<User, String> {
	
	public Optional<User> findByUserId(String userId);

}
