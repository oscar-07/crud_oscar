import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiUsuariosService } from '../api-usuarios.service';
import { Router } from '@angular/router';
import {KeyValue} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alta-usuario.component.html',
  styleUrl: './alta-usuario.component.css'
})
export class AltaUsuarioComponent {

  @ViewChild("nombre")
  referenciaNombre!: ElementRef;

  @ViewChild("edad")
  referenciaEdad!: ElementRef;

  @ViewChild("sangre")
  referenciaSangre!: ElementRef;

  constructor(private servicio: ApiUsuariosService, private router: Router){
    this.servicio.tiposDeSangre();
  }

  get obtenerTipos(){
    return this.servicio.listaTiposDeSangre;
  }

  guardarUsuario(){

    const nombre = this.referenciaNombre.nativeElement.value;
    const edad = this.referenciaEdad.nativeElement.value;
    const sangre = this.referenciaSangre.nativeElement.value;
    const fecha_registro = Date.now();


    this.servicio.guardarUsuario(nombre, edad, sangre, fecha_registro );
      Swal.fire({
        title: "Usuario guardado correctamente",
        confirmButtonText: "Ok"
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['usuarios'])
        }
      });

    }
}



