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

import co.thomasgreg.com.model.Client;
import co.thomasgreg.com.repository.ClientRepository;

//@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/client/api")
public class ClientController {

	// Tells the application context to inject an instance of BookRespository here
	@Autowired
	private ClientRepository clientRepository;

	@GetMapping()
	public List<Client> getAllClients() {
		return clientRepository.findAll();

	}

	@GetMapping("/{id}")
	public Client getClientById(@PathVariable Integer id) {
		Client client = clientRepository.findById(id).get();
		return client;
	}

	@PostMapping()
	public Client createClient(@RequestBody Client client) {
		return clientRepository.save(client);
	}

	@PutMapping("/{id}")
	public Client updateClient(@PathVariable Integer id, @RequestBody Client clientNew) {
		Client clientdb = clientRepository.findById(id).get();

		clientdb.setId_client(clientNew.getId_client());
		clientdb.setName_client(clientNew.getName_client());
		clientdb.setAddres(clientNew.getAddres());
		clientdb.setNumber_telefone(clientNew.getNumber_telefone());
		clientdb.setCode(clientNew.getCode());
		clientdb.setImagen(clientNew.getImagen());
		clientdb.setTipo_cliente(clientNew.getTipo_cliente());
		clientdb.setTime_Inactivity(clientNew.getTime_Inactivity());
		clientdb.setFloors(clientNew.getFloors());
		clientdb.setOffice(clientNew.getOffice());
		clientdb.setName_building(clientNew.getName_building());
		clientdb.setCity(clientNew.getCity());
		clientdb.setCode_sioval(clientNew.getCode_sioval());
		clientdb.setCode_sac(clientNew.getCode_sac());
		clientdb.setNit(clientNew.getNit());
		clientdb.setIdcity(clientNew.getIdcity());
		clientdb.setCode_branchMti(clientNew.getCode_branchMti());

		clientRepository.save(clientdb);
		return clientdb;
	}

	@DeleteMapping("/{id}")
	public Client deleteClient(@PathVariable Integer id) {
		Client clientdb = clientRepository.findById(id).get();
		clientRepository.delete(clientdb);
		return clientdb;
	}
	
	@DeleteMapping()
	public void deleteAll() {
		clientRepository.deleteAll();
	}
	
	@PostMapping("/postList")
	public String createSclientList(@RequestBody List<Client> clients) {
		clientRepository.saveAll(clients);
		return "listo";
	}
	//
	@GetMapping("/QueryName/{letra}")
    public List<Client> findByLetter(@PathVariable String letra){
        return clientRepository.findByLetter(letra);
    }

}
