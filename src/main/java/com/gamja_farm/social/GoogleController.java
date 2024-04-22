package com.gamja_farm.social;

import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GoogleController {

    @GetMapping("/login/google")
    public String getUserDetails(OAuth2AuthenticationToken authenticationToken) {
        return "Hello, " + authenticationToken.getPrincipal().getAttribute("name");
    }

}
