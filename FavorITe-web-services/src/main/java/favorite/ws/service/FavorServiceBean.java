package favorite.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import favorite.ws.model.Favor;
import favorite.ws.repository.FavorRepository;

@Service
public class FavorServiceBean implements FavorService {
	
	@Autowired
	private FavorRepository favorRepository;

	@Override
	public Collection<Favor> findAll() {
		Collection<Favor> favors = favorRepository.findAll();
		return favors;
	}
	
	@Override
	public Favor findOne(Long favorId) {
		Favor favor = favorRepository.findOne(favorId);
		return favor;
	}

	@Override
	public Favor create(Favor favor) {
		if (favor.getFavorId() != null) {
			return null;
		}
		Favor savedFavor = favorRepository.save(favor);
		return savedFavor;
	}

}
