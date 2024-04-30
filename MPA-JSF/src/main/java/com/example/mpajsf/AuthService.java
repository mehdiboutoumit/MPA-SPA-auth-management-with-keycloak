package com.example.mpajsf;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

import java.io.Serializable;


@Named
@SessionScoped
public class AuthService implements Serializable {
    private static final long serialVersionUID = 1L;

    // Hardcoded user credentials
    private static final String VALID_USERNAME = "admin";
    private static final String VALID_PASSWORD = "password";

    // Method to authenticate users
    public boolean authenticate(String username, String password) {
        return VALID_USERNAME.equals(username) && VALID_PASSWORD.equals(password);
    }
}
