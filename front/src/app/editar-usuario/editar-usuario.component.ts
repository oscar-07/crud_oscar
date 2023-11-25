import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiUsuariosService } from '../api-usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})
export class EditarUsuarioComponent {
  private params: any;
  private id: number = 0;

  @ViewChild("nombre")
  referenciaNombre!: ElementRef;
  
  @ViewChild("edad")
  referenciaEdad!: ElementRef;

  @ViewChild("sangre")
  referenciaSangre!: ElementRef;

  constructor(private ruta: ActivatedRoute, private servicio: ApiUsuariosService, private router: Router){
    this.params = this.ruta.params.subscribe( parametros =>{
      this.id = parametros["id"];
      this.servicio.obtenerUsuario(this.id);
      this.servicio.tiposDeSangre();
    })
  }

  get usuario(){
    return this.servicio.usuario;
  }

  get obtenerTipos(){
    return this.servicio.listaTiposDeSangre;
  }

  actualizarUsuario(){
    const nombre = this.referenciaNombre.nativeElement.value;
    const edad = this.referenciaEdad.nativeElement.value;
    const sangre = this.referenciaSangre.nativeElement.value;
    const fecha_registro = this.usuario.fecha_registro

    this.servicio.actualizarUsuario(this.id,nombre,edad,sangre,fecha_registro);
      Swal.fire({
        title: "Usuario editado correctamente",
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['usuarios'])
        }
      });

    }

  }


