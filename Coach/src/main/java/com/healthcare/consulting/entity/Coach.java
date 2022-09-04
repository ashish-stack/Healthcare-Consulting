package com.healthcare.consulting.entity;


import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.healthcare.consulting.dto.CoachDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Data
@Getter
@Setter
@AllArgsConstructor
@Entity
@NoArgsConstructor
public class Coach {

	@Id
//	@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="Coach_ID")
	@SequenceGenerator(name="coach_id",initialValue=1001,allocationSize=1,sequenceName="coachID_Seq")
	private String coachId;
	
	private String coachName;
	private String gender;
	private String password;
	private String speciality;
	
	@Column(name="mobile_number")
	private Long mobileNumber;
	
	@Column(name="date_of_birth")
	@JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate dateOfBirth;
	
	public static CoachDTO prepareCoachDTO(Coach coachEntity) {
		CoachDTO coachDTO = new CoachDTO();
		coachDTO.setCoachName(coachEntity.getCoachName());
		coachDTO.setGender(coachEntity.getGender());
		coachDTO.setPassword(coachEntity.getPassword());
		coachDTO.setSpeciality(coachEntity.getSpeciality());
		coachDTO.setCoachId(coachEntity.getCoachId());
		coachDTO.setMobileNumber(coachEntity.getMobileNumber());
		coachDTO.setDateOfBirth(coachEntity.getDateOfBirth());
		return coachDTO;
		
	}
}
