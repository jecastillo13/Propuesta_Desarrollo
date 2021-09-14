package co.thomasgreg.com.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import co.thomasgreg.com.model.Client;

public interface ClientRepository extends JpaRepository<Client,Integer>{

	@Query("FROM Client WHERE Code_sioval = ?1")
    List<Client> findByLetter(String letra);
	
   // @Query(value="SELECT state FROM country WHERE population BETWEEN ?1 AND ?2", nativeQuery = true)
    //List<String> findByStates (int   a , int   b);
	
}