package com.spartan.capital.enterprises.service;

import com.spartan.capital.enterprises.model.Inquiry;
import com.spartan.capital.enterprises.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InquiryService {

    @Autowired
    private InquiryRepository inquiryRepository;

    public Inquiry saveInquiry(Inquiry inquiry) {
        return inquiryRepository.save(inquiry);
    }
}