package favorite.ws.web.api;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import favorite.ws.model.User;
import favorite.ws.service.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(
			value="/api/users",
			method=RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<User>> getUsers() {
		Collection<User> users = userService.findAll();
		return new ResponseEntity<Collection<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(
			value="/api/users",
			method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.ALL_VALUE)
	public ResponseEntity<String> createUser(
			@RequestBody User user) {
			String response = "";
			boolean existsUsername = userService.existsUsername(user.getUsername());
			boolean existsEmail = userService.existsEmail(user.getEmail());
			boolean existsMobile = userService.existsMobile(user.getMobile());
			if (existsUsername) {
				response += "The username you specified is already in use. Please choose another one.<br/>";
			}
			if (existsEmail) {
				response += "The email you specified is already registered!<br/>";
			}
			if (existsMobile) {
				response += "The mobile phone you specified is already registered!";
			}
			if (response.isEmpty()) userService.create(user);
			return new ResponseEntity<String>(response, HttpStatus.OK);
		}
}
