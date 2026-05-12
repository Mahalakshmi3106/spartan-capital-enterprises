package com.spartan.capital.enterprises.controller;

import com.spartan.capital.enterprises.model.Inquiry;
import com.spartan.capital.enterprises.service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/inquiry")
@CrossOrigin("*")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    @PostMapping
    public Inquiry saveInquiry(@RequestBody Inquiry inquiry) {
        return inquiryService.saveInquiry(inquiry);
    }
}