package com.quickr;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.servlet.annotation.ServletSecurity.EmptyRoleSemantic;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.quickr.model.UserRegistrationAccount;
import com.quickr.repository.UserRepository;
import com.quickr.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QuickrProjectApplicationTests {

	/*@Test
	public void contextLoads() {
	}
*/
	@Autowired
	private UserService userService;
	@MockBean
	private UserRepository userRepos;
	@Test
public void getAllUsersTest() {
	when(userRepos.findAll()).thenReturn(Stream.of(new UserRegistrationAccount("mallika","mall@gmail.com",12597821,"As1234"))
			.collect(Collectors.toList()));
assertEquals(1, userService.getAllUsers().size());
}}
	
/*	@Test
	public void getUserByEmail(String email) {
		when(userRepos.findById(email)).thenReturn(Stream.of(new UserRegistrationAccount("mallika","mall@gmail.com",12597821,"As1234"))
				.collect(Collectors.toList()));
	assertEquals(1, userService.getAllUsers().size());
	}
}
*/
