package com.crud.Dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.crud.model.Usuario;

public interface IUsuarioDao extends CrudRepository<Usuario, Long> {
	  List<Usuario> findByNombre(String nombre);

}
