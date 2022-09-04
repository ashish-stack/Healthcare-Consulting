package com.healthcare.consulting.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthcare.consulting.dto.CoachDTO;
import com.healthcare.consulting.dto.LoginDTO;
import com.healthcare.consulting.entity.Coach;
import com.healthcare.consulting.repository.CoachRepository;
import com.healthcare.consulting.service.CoachService;

@Service
public class CoachServiceImpl implements CoachService {

	@Autowired 
	CoachRepository coachRepository;

	@Override
	public void createCoach(CoachDTO coachDTO) {
		// TODO Auto-generated method stub
		coachRepository.save(CoachDTO.prepareCoachEntity(coachDTO));
	}

	@Override
	public boolean loginCoach(LoginDTO loginDTO) {
		boolean response = false;
		Coach coachEntity =coachRepository.findByCoachId(loginDTO.getId()).get();
		if(coachEntity.getPassword().equals(loginDTO.getPassword())){
			response = true;
		}
		else {
			return false;
		}
		
		return response;
	}
	
	@Override
	public CoachDTO getCoachProfile(String coachId) {
		Optional<Coach> coachEntity = coachRepository.findById(coachId);
		CoachDTO coachDTO = coachEntity.get().prepareCoachDTO(coachEntity.get());
		return coachDTO;	
	}

	@Override
	public List<CoachDTO> showAllCoaches() {
		List<Coach> coachEntity = coachRepository.findAll();
		List<CoachDTO> coachDTOList = new ArrayList<>();
		for(Coach entity: coachEntity) {
			coachDTOList.add(entity.prepareCoachDTO(entity));
		}
		return coachDTOList;
		
	}
	
	

}
