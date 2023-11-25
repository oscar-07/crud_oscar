import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiUsuariosService } from '../api-usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export class DetalleUsuarioComponent {
  private params: any;
  private id: number = 0;

  constructor(private canal: ActivatedRoute, private servicio: ApiUsuariosService){
    this.params = this.canal.params.subscribe(resp => {
      this.id = resp["id"];
      this.servicio.obtenerUsuario(this.id);
    })
  }

  get usuario(){
    return this.servicio.usuario;
  }


}
