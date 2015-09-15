package favorite.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import favorite.ws.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
