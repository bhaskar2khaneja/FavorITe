package favorite.ws.service;

import java.util.Collection;

import favorite.ws.model.User;

public interface UserService {

	Collection<User> findAll();
	User create(User user);
	boolean existsUsername(String username);
	boolean existsEmail(String email);
	boolean existsMobile(Long mobile);
}
