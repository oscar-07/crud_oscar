package com.crud.model;

import java.util.Date;

import com.crud.model.enums.Tipo_Sangre;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "usuario")
public class Usuario {

	@Column(name = "id")
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CUST_SEQ1")
	@SequenceGenerator(sequenceName = "sequence1",allocationSize = 1, name = "CUST_SEQ1")
	private Long id;
	
	@NotEmpty(message = "Nombre es requerido")
	@Column(name="nombre")
	private String nombre;
	
	@NotNull(message = "Indica la edad")
	@Column(name="edad")
	private Integer edad;
	
	@NotNull(message = "Menciona el tipo de sangre")	
	@Column(name="tipo_sangre")
	private Tipo_Sangre sangre;
	
	
	@Column(name="fecha_registro")
	private Date fecha_registro;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}




	public Integer getEdad() {
		return edad;
	}


	public void setEdad(Integer edad) {
		this.edad = edad;
	}


	public Tipo_Sangre getSangre() {
		return sangre;
	}


	public void setSangre(Tipo_Sangre sangre) {
		this.sangre = sangre;
	}


	public Date getFecha_registro() {
		return fecha_registro;
	}


	public void setFecha_registro(Date fecha_registro) {
		this.fecha_registro = fecha_registro;
	}
	
	
	
}
