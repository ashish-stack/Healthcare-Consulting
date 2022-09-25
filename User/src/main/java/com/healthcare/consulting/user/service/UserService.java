package com.healthcare.consulting.user.service;

import com.healthcare.consulting.user.dto.LoginDTO;
import com.healthcare.consulting.user.dto.UserDTO;

public interface UserService {
	
	
	public String createUser(UserDTO userDTO);

	public boolean loginUser(LoginDTO loginDTO);

	public UserDTO getUserProfile(String userId);
}
