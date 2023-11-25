package com.crud.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.model.enums.Tipo_Sangre;

@RestController
@RequestMapping("api/listadesangre")
@CrossOrigin(origins = "*")
public class ListaTiposDeSangre {

	@GetMapping
	public Map<String, String> listar(){
		List<Tipo_Sangre> lista_tipos = Arrays.asList(Tipo_Sangre.values());
		 Map<String, String> map = new HashMap<String, String>();
		
		for (Tipo_Sangre c : lista_tipos) {
			map.put(c.name(), c.getDescripcion());
		}
		return map;
	}
	
}
