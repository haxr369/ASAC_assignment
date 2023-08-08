package com.example.dockerInital;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class DockerInitalApplication {

	public static void main(String[] args) {
		SpringApplication.run(DockerInitalApplication.class, args);
	}
	
	@GetMapping("/hello")
	public String hello(){
		return "hello";
	}

}

