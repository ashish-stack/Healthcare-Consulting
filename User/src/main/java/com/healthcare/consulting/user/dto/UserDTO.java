package com.healthcare.consulting.user.dto;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Id;

import com.healthcare.consulting.user.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

	private String userId;
	private String name;
	private String password;
	private char gender;

	private LocalDate dateOfBirth;
	
	private long mobileNumber;
	private String email;
	private int pincode;
	private String city;
	private String state;
	private String country;
	
	public static User prepareUserEntity(UserDTO userDTO) {
		User UserEntity =  new User();
		UserEntity.setUserId(userDTO.getUserId());
		UserEntity.setName(userDTO.getName());
		UserEntity.setGender(userDTO.getGender());
		UserEntity.setPassword(userDTO.getPassword());
		UserEntity.setMobileNumber(userDTO.getMobileNumber());
		UserEntity.setDateOfBirth(userDTO.getDateOfBirth());
		UserEntity.setEmail(userDTO.getEmail());
		UserEntity.setPincode(userDTO.getPincode());
		UserEntity.setCity(userDTO.getCity());
		UserEntity.setState(userDTO.getState());
		UserEntity.setCountry(userDTO.getCountry());
		
		return UserEntity;
		
	}
}
