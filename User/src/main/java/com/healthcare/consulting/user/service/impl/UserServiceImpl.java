package com.healthcare.consulting.user.service.impl;

import java.util.Optional;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.consulting.user.dto.LoginDTO;
import com.healthcare.consulting.user.dto.UserDTO;
import com.healthcare.consulting.user.entity.User;
import com.healthcare.consulting.user.repository.UserRepository;
import com.healthcare.consulting.user.service.UserService;
import com.healthcare.consulting.user.utility.UserIdGenerator;

import lombok.extern.log4j.Log4j2;


@Log4j2
@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	UserRepository userRepository;

	@Override
	public String createUser(UserDTO userDTO) {
		SharedSessionContractImplementor sharedSessionContractImplementor = null;
		Object object = null;
		UserIdGenerator userIdGenerator = new UserIdGenerator();
		userDTO.setUserId(userIdGenerator.generate(sharedSessionContractImplementor, object).toString());
		userRepository.save(userDTO.prepareUserEntity(userDTO));
		log.info("user profile got created successfully and your userId is {}",userDTO.getUserId());
		return userDTO.getUserId();
	}

	@Override
	public boolean loginUser(LoginDTO loginDTO) {
		Optional<User> user = userRepository.findById(loginDTO.getId());
		if(!user.isEmpty() && user.get().getPassword().equals(loginDTO.getPassword())){
			log.info("Login successfull..");
			return true;
		}else {
			return false;
		}
	}

	@Override
	public UserDTO getUserProfile(String userId) {
		log.info("fetching user profile for user id {}..",userId);
		Optional<User> user = userRepository.findByUserId(userId);
		return user.get().prepareuserDTO(user.get());
	}

}
