package com.healthcare.consulting.user.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.healthcare.consulting.user.dto.BookingDTO;
import com.healthcare.consulting.user.dto.LoginDTO;
import com.healthcare.consulting.user.dto.UserDTO;
import com.healthcare.consulting.user.service.UserService;

import lombok.extern.log4j.Log4j2;


@RestController
@RequestMapping("/users")
@Validated
@CrossOrigin
@Log4j2
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping
	public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO){
		return ResponseEntity.ok(userService.createUser(userDTO));
	}
	
	@PostMapping
	(value="/login", consumes =MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<Boolean> loginUser(@RequestBody LoginDTO loginDTO){
		return ResponseEntity.ok(userService.loginUser(loginDTO));
	}
	
	@RequestMapping
	(value="/{userId}", method=RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<UserDTO> getUserProfile(@PathVariable("userId") String userId) {
		return ResponseEntity.ok(userService.getUserProfile(userId));
		
	}
	
//	@RequestMapping
//	(value="booking/{userId}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
//	public List<BookingDTO> showMyAppointments(@PathVariable("userId") String userId){
//		List<BookingDTO> bookingDTOList = new ArrayList<>();
//		bookingDTOList = new RestTemplate().getForObject("http://localhost:8300/coach/coaches/"+userId,List.class);
//		return bookingDTOList;
//	}
	
	@RequestMapping
	(value="booking/{userId}", method = RequestMethod.GET, produces = MediaType.TEXT_PLAIN_VALUE)
	public String showMyAppointments(@PathVariable("userId") String userId){
		String bookingDTOList ="";
		bookingDTOList = new RestTemplate().getForObject("http://localhost:8300/coach/coaches/"+userId,String.class);
		log.info("Stri {}",bookingDTOList);
		return bookingDTOList;
	}
}
