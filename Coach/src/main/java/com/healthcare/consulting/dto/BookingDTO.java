package com.healthcare.consulting.dto;

import java.time.LocalDate;

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
public class BookingDTO {
	
	
	private int bookingId;
	private String userId;
	private String coachId;
	private String slot;
	private LocalDate appointmentDate;
	
	/*
	 * public static Booking preparebookingDTO(BookingDTO bookingDTO) {
	 * 
	 * Booking bookingEntity = new Booking();
	 * 
	 * bookingEntity.setUserId(bookingDTO.getUserId());
	 * bookingEntity.setUserId(bookingDTO.getUserId());
	 * bookingEntity.setCoachId(bookingDTO.getCoachId());
	 * bookingEntity.setSlot(bookingDTO.getSlot());
	 * bookingEntity.setAppointmentDate(bookingDTO.getAppointmentDate()); return
	 * bookingEntity;
	 * 
	 * 
	 * }
	 */
}
