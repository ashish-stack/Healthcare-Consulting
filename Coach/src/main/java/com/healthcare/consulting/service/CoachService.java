package com.healthcare.consulting.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.healthcare.consulting.dto.CoachDTO;
import com.healthcare.consulting.dto.LoginDTO;

@Service
public interface CoachService {
	
	public void createCoach(CoachDTO coachDTO);

	public boolean loginCoach(LoginDTO loginDTO);

	public CoachDTO getCoachProfile(String coachId);
	
	public List<CoachDTO> showAllCoaches();

}
