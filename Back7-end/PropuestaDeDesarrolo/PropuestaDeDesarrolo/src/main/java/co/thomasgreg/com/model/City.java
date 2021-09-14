package co.thomasgreg.com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "city")
public class City {
	
	@Id
	@Column(name= "code_city")
	private int code_city;
	
	@Column(name= "name_city")
	private String name_city;
	
	@Column(name= "name_dpto")
	private String name_dpto;

	@Column(name= "sigla")
	private String sigla;

	public City() {
	
	}

	public City(int code_city, String name_city, String name_dpto, String sigla) {
		super();
		this.code_city = code_city;
		this.name_city = name_city;
		this.name_dpto = name_dpto;
		this.sigla = sigla;
	}

	public int getCode_city() {
		return code_city;
	}

	public void setCode_city(int code_city) {
		this.code_city = code_city;
	}

	public String getName_city() {
		return name_city;
	}

	public void setName_city(String name_city) {
		this.name_city = name_city;
	}

	public String getName_dpto() {
		return name_dpto;
	}

	public void setName_dpto(String name_dpto) {
		this.name_dpto = name_dpto;
	}

	public String getSigla() {
		return sigla;
	}

	public void setSigla(String sigla) {
		this.sigla = sigla;
	}
	
	
	

}
