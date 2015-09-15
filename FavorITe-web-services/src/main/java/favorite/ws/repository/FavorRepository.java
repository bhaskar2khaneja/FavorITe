package favorite.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import favorite.ws.model.Favor;

@Repository
public interface FavorRepository extends JpaRepository<Favor, Long> {
	
}