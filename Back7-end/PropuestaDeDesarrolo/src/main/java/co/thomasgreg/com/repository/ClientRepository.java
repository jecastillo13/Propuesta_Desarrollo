package co.thomasgreg.com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import co.thomasgreg.com.model.Client;

public interface ClientRepository extends JpaRepository<Client,Integer>{

}