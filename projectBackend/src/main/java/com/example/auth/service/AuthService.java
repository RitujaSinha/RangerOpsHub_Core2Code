package com.example.auth.service;

import com.example.auth.dto.*;
import com.example.auth.model.User;
import com.example.auth.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository repo) {
        this.repo = repo;
    }

    public String signup(SignupRequest req) {
        if (repo.findByUsername(req.username) != null)
            return "Username already exists";

        String hashed = encoder.encode(req.password);

        repo.save(new User(req.username, hashed));

        return "Signup successful!";
    }

    public String login(LoginRequest req) {
        User user = repo.findByUsername(req.username);

        if (user == null)
            return "User not found";

        if (encoder.matches(req.password, user.getPassword()))
            return "Login successful!";

        return "Invalid password!";
    }
}
