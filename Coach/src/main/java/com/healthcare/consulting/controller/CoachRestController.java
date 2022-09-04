package com.healthcare.consulting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthcare.consulting.dto.CoachDTO;
import com.healthcare.consulting.dto.LoginDTO;
import com.healthcare.consulting.service.CoachService;



@RestController
@RequestMapping("/coaches")
public class CoachRestController {
	
	@Autowired
	CoachService coachService;
	
	@PostMapping(consumes="application/json")
	public ResponseEntity<String> createCoach(@RequestBody CoachDTO coachDTO){
		coachService.createCoach(coachDTO);
		return ResponseEntity.ok("id-"+coachDTO.getCoachId());
	}
	
	@PostMapping(value="/login",consumes = "application/json")
	public ResponseEntity<Boolean> loginCoach(@RequestBody LoginDTO loginDTO){
		return new ResponseEntity<>(coachService.loginCoach(loginDTO),HttpStatus.OK);
	}
	
	@GetMapping(value="/{coachId}",produces = "application/json")
	public ResponseEntity<CoachDTO> getCoachProfile(
			@PathVariable("coachId") String coachId){
				return new ResponseEntity<>(coachService.getCoachProfile(coachId), HttpStatus.OK);
	}
	
	

}
