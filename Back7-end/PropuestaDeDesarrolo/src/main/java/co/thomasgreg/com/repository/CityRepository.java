package co.thomasgreg.com.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import co.thomasgreg.com.model.City;

public interface CityRepository extends JpaRepository<City, Integer> {

}
