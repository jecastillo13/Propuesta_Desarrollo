package co.thomasgreg.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.thomasgreg.com.model.City;
import co.thomasgreg.com.model.Client;
import co.thomasgreg.com.repository.CityRepository;

@RestController
@RequestMapping("/city/api")
public class CityController {

	@Autowired
	private CityRepository cityRepository;

	@PostMapping()
	public City createCity(@RequestBody City city) {
		return cityRepository.save(city);
	}

	@PostMapping("/postList")
	public String createCityList(@RequestBody List<City> city) {
		cityRepository.saveAll(city);
		return "listo";
	}
	
	@GetMapping()
	public List<City> getAllcity() {
		return cityRepository.findAll();

	}

	@GetMapping("/{id}")
	public City getCityById(@PathVariable Integer id) {
		City city = cityRepository.findById(id).get();
		return city;
	}
	
	@DeleteMapping("/{id}")
	public City deleteCity(@PathVariable Integer id) {
		City citydb = cityRepository.findById(id).get();
		cityRepository.delete(citydb);
		return citydb;
	}
	
	@DeleteMapping()
	public void deleteAll() {
		cityRepository.deleteAll();
	}
	
	@PutMapping("/{id}")
	public City updateCity(@PathVariable Integer id, @RequestBody City cityNew) {
		City citydb = cityRepository.findById(id).get();

		citydb.setCode_city(cityNew.getCode_city());
		citydb.setName_city(cityNew.getName_city());
		citydb.setName_dpto(cityNew.getName_dpto());
		citydb.setSigla(cityNew.getSigla());

		
		cityRepository.save(citydb);
		return citydb;
	}


}
