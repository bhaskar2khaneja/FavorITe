package favorite.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import favorite.ws.model.User;
import favorite.ws.repository.UserRepository;

@Service
public class UserServiceBean implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Collection<User> findAll() {
		Collection<User> users = userRepository.findAll();
		return users;
	}
	
	@Override
	public User create(User user) {
		if (user.getUserId() != null) {
			return null;
		}
		User savedUser = userRepository.save(user);
		return savedUser;
	}

	public boolean existsUsername(String username) {
		for (User user: findAll()) {
			if ((user.getUsername()).equals(username)) return true;
		}
		return false;
	}
	
	public boolean existsEmail(String email) {
		for (User user: findAll()) {
			if ((user.getEmail()).equals(email)) return true;
		}
		return false;
	}
	
	public boolean existsMobile(Long mobile) {
		for (User user: findAll()) {
			if ((user.getMobile()).equals(mobile)) return true;
		}
		return false;
	}

}
