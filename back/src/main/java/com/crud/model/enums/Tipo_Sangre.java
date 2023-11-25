package com.crud.model.enums;

public enum Tipo_Sangre {
	A_Negativo ("A Negativo - Puede donar a A± y AB±"),
	A_Positivo ("A Positivo - Puede donar a A+ y AB+"),
	B_Negativo ("B Negativo - Puede donar a B± y AB±"),
	B_Positivo ("B Positivo - Puede donar a B+ y AB+"),
	O_Negativo ("O Negativo - Donante universal");
	
	private String descripcion;

	private Tipo_Sangre(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	
	
}
