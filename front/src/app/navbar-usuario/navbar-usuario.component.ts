import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiUsuariosService } from '../api-usuarios.service';

@Component({
  selector: 'app-navbar-usuario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-usuario.component.html',
  styleUrl: './navbar-usuario.component.css'
})
export class NavbarUsuarioComponent {
  @ViewChild("buscar")
  referenciaBuscar!: ElementRef;

  constructor(private canal: ActivatedRoute, private servicio: ApiUsuariosService){
  
  }

  buscar(){
    const buscarNom = this.referenciaBuscar.nativeElement.value;
    this.servicio.buscarNombre(buscarNom);
  }

  get usuario(){
    return this.servicio.usuario;
  }
}
