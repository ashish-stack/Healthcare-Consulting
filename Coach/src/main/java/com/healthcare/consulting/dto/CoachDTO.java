package com.healthcare.consulting.dto;


import java.time.LocalDate;

import com.healthcare.consulting.entity.Coach;

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
public class CoachDTO {

	private String coachId;
	private String coachName;
	private String gender;
	private String password;
	private String speciality;
	private Long mobileNumber;
	private LocalDate dateOfBirth;
	
	public static Coach prepareCoachEntity(CoachDTO coachDTO) {
		Coach coachEntity =  new Coach();
		coachEntity.setCoachId(coachDTO.getCoachId());
		coachEntity.setCoachName(coachDTO.getCoachName());
		coachEntity.setGender(coachDTO.getGender());
		coachEntity.setPassword(coachDTO.getPassword());
		coachEntity.setSpeciality(coachDTO.getSpeciality());
		coachEntity.setMobileNumber(coachDTO.getMobileNumber());
		coachEntity.setDateOfBirth(coachDTO.getDateOfBirth());
		
		return coachEntity;
		
	}
}
