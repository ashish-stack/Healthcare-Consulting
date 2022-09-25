package com.healthcare.consulting.user.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.healthcare.consulting.user.dto.UserDTO;


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
@Entity
public class User {
	
	@Id
	@Column(name="user_Id")
	private String userId;
	private String name;
	private String password;
	private char gender;
	
	@Column(name="date_of_birth")
	private LocalDate dateOfBirth;
	
	private long mobileNumber;
	private String email;
	private int pincode;
	private String city;
	private String state;
	private String country;
	
	public static UserDTO prepareuserDTO(User user) {
		UserDTO userDTO =  new UserDTO();
		userDTO.setUserId(user.getUserId());
		userDTO.setName(user.getName());
		userDTO.setGender(user.getGender());
		userDTO.setPassword(user.getPassword());
		userDTO.setMobileNumber(user.getMobileNumber());
		userDTO.setDateOfBirth(user.getDateOfBirth());
		userDTO.setEmail(user.getEmail());
		userDTO.setPincode(user.getPincode());
		userDTO.setCity(user.getCity());
		userDTO.setState(user.getState());
		userDTO.setCountry(user.getCountry());
		
		return userDTO;
		
	}

}
