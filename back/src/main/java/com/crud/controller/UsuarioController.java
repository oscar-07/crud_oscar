package com.crud.controller;

import java.io.Console;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.tomcat.JarScanType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.crud.model.Usuario;
import com.crud.model.enums.Tipo_Sangre;
import com.crud.service.IService;

@RestController
@RequestMapping("api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
	@Autowired
	IService<Usuario, Usuario> UsuarioesService;
	
	@PostMapping
	public Map<String, String> guardar(@RequestBody Usuario j){
		UsuarioesService.guardar(j);
		Map<String, String> respuesta = new HashMap<>();
		respuesta.put("msg", "Usuario Guardado correctamente");
		return respuesta;
	}
	
	@GetMapping
	public List<Usuario> listar(){
		return UsuarioesService.listar();
	}
	
	@GetMapping("/obtener/{id}")
	public Usuario obtenerPorId(@PathVariable(name = "id") Long id) {
		Optional<Usuario> Usuario = UsuarioesService.getById(id);
		if (Usuario.isPresent()) {
			return Usuario.get();
		} else {
			return null;
		}
	}
	
	@GetMapping("/buscar/{nombre}")
	public Usuario obtenerPorId(@PathVariable(name = "nombre") String nombre) {
		List<Usuario> usuario = UsuarioesService.findByNombre(nombre);
		if (!usuario.isEmpty()) {
			return usuario.get(0);
		} else {
			return null;
		}
	}
	
	
	@DeleteMapping("/eliminar")
    public Map<String,String> eliminar(@RequestParam(name = "id") Long id ) {
		UsuarioesService.eliminar(id);
        Map<String,String> respuesta = new HashMap<>();
        respuesta.put("msg", "Usuario eliminado correctamente");
        return respuesta;
    }
	
	
	
	@PutMapping("/actualizar/{id}")
	public Map<String, String> actualizar(@RequestBody Usuario c, @PathVariable(name = "id") Long id){
		Optional<Usuario> Usuario = UsuarioesService.getById(id);
		if (Usuario.isPresent()) {
			c.setId(id);
			UsuarioesService.guardar(c);
		} else {
			throw new RuntimeException("El Usuario no existe en la bd");
		}
		Map<String, String> respuesta = new HashMap<>();
		respuesta.put("msg", "Usuario actualizado correctamente");
		return respuesta;
	}
}
