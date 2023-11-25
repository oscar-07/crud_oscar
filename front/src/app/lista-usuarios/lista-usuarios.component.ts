import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiUsuariosService } from '../api-usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {
  constructor(public servicio: ApiUsuariosService){
    this.servicio.listadoUsuarios();
  }

  get listaUsuarios(){
    if (this.servicio.usuario!=null) {
      return this.servicio.listaUsuarios; 
    } else {
      return this.servicio.usuario;
    }
  }


  eliminar(id:number){
    this.servicio.eliminarUsuario(id);
  }


}
