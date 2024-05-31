package com.example.spabackend.controller;

//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.security.oauth2.jwt.Jwt;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.http.ResponseEntity;
//import jakarta.servlet.http.HttpServletRequest;
//
//
//@RestController
//@RequestMapping("/api")
//public class Controller {
//
//    @GetMapping("/hello2")
//    public String hello(@AuthenticationPrincipal Jwt jwt) {
//        return "Hello, " + jwt.getClaimAsString("preferred_username");
//    }
//    	@GetMapping(path = "/")
//    public String index() {
//        return "external";
//    }
//
//    @GetMapping("/logout")
//    public String logout(HttpServletRequest request) throws Exception {
//        request.logout();
//        return "redirect:/";
//    }
//
//    @GetMapping(path = "/contatc")
//    public String conatct() {
//
//        return "contact";
//    }
//    @GetMapping(path = "/profile")
//    public String profile() {
//
//        return "profile";
//    }
//}
import org.springframework.http.ResponseEntity;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {

	@GetMapping(path = "/")
    public String index() {
        return "external";
    }

    @GetMapping("/logout")
    public String logout(HttpServletRequest request) throws Exception {
        request.logout();
        return "redirect:/";
    }

    @GetMapping(path = "/contact")
    public String contact() {
        return "contact";
    }
    @GetMapping(path = "/profile")
    public String profile() {

        return "profile";
    }


}
