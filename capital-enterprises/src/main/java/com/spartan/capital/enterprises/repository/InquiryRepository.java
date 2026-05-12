package com.spartan.capital.enterprises.repository;

import com.spartan.capital.enterprises.model.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
}