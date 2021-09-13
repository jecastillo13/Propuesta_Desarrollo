package co.thomasgreg.com.model;

import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client {

	@Id
	@Column(name ="id_client")
	private int id_client;
	
	@Column(name= "name_client")
	private String name_client;
	
	@Column(name= "addres")
	private String addres;
	
	@Column(name= "number_telefone")
	private String number_telefone;
	
	@Column(name= "code")
	private String code;
	
	@Column(name= "imagen")
	private String imagen;

	@Column(name= "tipo_cliente")
	private int tipo_cliente;
	
	@Column(name= "time_Inactivity")
	private int time_Inactivity;
	
	@Column(name= "floors")
	private String floors;
	
	@Column(name= "office")
	private String office;
	
	@Column(name= "name_building")
	private String name_building;
	
	@Column(name= "city")
	private String city;
	
	@Column(name= "code_sioval")
	private String code_sioval;
	
	@Column(name= "code_sac")
	private String code_sac;
	
	@Column(name= "nit")
	private String nit;
	
	@Column(name= "Idcity")
	private int Idcity;

	@Column(name= "Code_branchMti")
	private int Code_branchMti;


	public Client() {
	}

	public Client(int id_client, String name_client, String addres, String number_telefone, String code, String imagen,
			int tipo_cliente, int time_Inactivity, String floors, String office, String name_building, String city,
			String code_sioval, String code_sac, String nit, int idcity, int code_branchMti) {
		super();
		this.id_client = id_client;
		this.name_client = name_client;
		this.addres = addres;
		this.number_telefone = number_telefone;
		this.code = code;
		this.imagen = imagen;
		this.tipo_cliente = tipo_cliente;
		this.time_Inactivity = time_Inactivity;
		this.floors = floors;
		this.office = office;
		this.name_building = name_building;
		this.city = city;
		this.code_sioval = code_sioval;
		this.code_sac = code_sac;
		this.nit = nit;
		Idcity = idcity;
		Code_branchMti = code_branchMti;
	}

	public int getId_client() {
		return id_client;
	}

	public void setId_client(int id_client) {
		this.id_client = id_client;
	}

	public String getName_client() {
		return name_client;
	}

	public void setName_client(String name_client) {
		this.name_client = name_client;
	}

	public String getAddres() {
		return addres;
	}

	public void setAddres(String addres) {
		this.addres = addres;
	}

	public String getNumber_telefone() {
		return number_telefone;
	}

	public void setNumber_telefone(String number_telefone) {
		this.number_telefone = number_telefone;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public int getTipo_cliente() {
		return tipo_cliente;
	}

	public void setTipo_cliente(int tipo_cliente) {
		this.tipo_cliente = tipo_cliente;
	}

	public int getTime_Inactivity() {
		return time_Inactivity;
	}

	public void setTime_Inactivity(int time_Inactivity) {
		this.time_Inactivity = time_Inactivity;
	}

	public String getFloors() {
		return floors;
	}

	public void setFloors(String floors) {
		this.floors = floors;
	}

	public String getOffice() {
		return office;
	}

	public void setOffice(String office) {
		this.office = office;
	}

	public String getName_building() {
		return name_building;
	}

	public void setName_building(String name_building) {
		this.name_building = name_building;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCode_sioval() {
		return code_sioval;
	}

	public void setCode_sioval(String code_sioval) {
		this.code_sioval = code_sioval;
	}

	public String getCode_sac() {
		return code_sac;
	}

	public void setCode_sac(String code_sac) {
		this.code_sac = code_sac;
	}

	public String getNit() {
		return nit;
	}

	public void setNit(String nit) {
		this.nit = nit;
	}

	public int getIdcity() {
		return Idcity;
	}

	public void setIdcity(int idcity) {
		Idcity = idcity;
	}

	public int getCode_branchMti() {
		return Code_branchMti;
	}

	public void setCode_branchMti(int code_branchMti) {
		Code_branchMti = code_branchMti;
	}
	
	
}
