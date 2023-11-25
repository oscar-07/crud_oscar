package com.crud.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.Dao.IUsuarioDao;
import com.crud.model.Usuario;

@Service
public class UsuarioService implements IService<Usuario, Usuario>{

	@Autowired
	private IUsuarioDao usuarioDao;
	
	@Override
	public List<Usuario> listar() {
		List<Usuario> usuario = new ArrayList<>();
		usuario = (List<Usuario>) usuarioDao.findAll();
		return usuario;
	}

	@Override
	public Optional<Usuario> getById(Long id) {
		Optional<Usuario> usuario = usuarioDao.findById(id);
		return usuario;
	}

	@Override 	
	public void guardar(Usuario t) {
		this.usuarioDao.save(t);
	}

	@Override
	public void eliminar(Long id) {
		this.usuarioDao.deleteById(id);
	}

	@Override
	public List<Usuario> findByNombre(String nombre) {
		List<Usuario> usuario = usuarioDao.findByNombre(nombre);
		return usuario;
	}



}
