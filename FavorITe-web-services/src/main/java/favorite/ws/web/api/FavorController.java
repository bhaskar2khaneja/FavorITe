package favorite.ws.web.api;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import favorite.ws.model.Favor;
import favorite.ws.service.FavorService;

@RestController
public class FavorController {

	@Autowired
	private FavorService favorService;
	
	@RequestMapping(//denotes this is where http requests should go
			value="/api/favors",
			method=RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Favor>> getFavors() {//responseentity-> converts it into JSON and inserts it into HTTP response body
		Collection<Favor> favors = favorService.findAll();
		return new ResponseEntity<Collection<Favor>>(favors, HttpStatus.OK);//status code of 200
	}
	
	@RequestMapping(
			value="/api/favors/{id}",
			method=RequestMethod.GET,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Favor> getFavor(@PathVariable("id") Long id) {
		Favor favor = favorService.findOne(id);
		if (favor == null)
			return new ResponseEntity<Favor>(HttpStatus.NOT_FOUND);//status code of 404
		return new ResponseEntity<Favor>(favor, HttpStatus.OK);
	}
	
	@RequestMapping(
			value="/api/favors",
			method=RequestMethod.POST,
			consumes=MediaType.APPLICATION_JSON_VALUE,
			produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Favor> createFavor(
			@RequestBody Favor favor) {
		
		Favor savedFavor = favorService.create(favor);
		return new ResponseEntity<Favor>(savedFavor, HttpStatus.CREATED); //status code of 201
		
	}

	
}
