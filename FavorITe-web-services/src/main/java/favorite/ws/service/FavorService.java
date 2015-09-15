package favorite.ws.service;

import java.util.Collection;

import favorite.ws.model.Favor;

public interface FavorService {

	Collection<Favor> findAll();
	Favor findOne(Long favorId);
	Favor create(Favor favor);
	
}
