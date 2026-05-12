package com.spartan.capital.enterprises.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String email;

    @Column(length = 1000)
    private String message;
}