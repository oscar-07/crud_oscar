import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {
  public listaUsuarios: any [];
  public listaTiposDeSangre: any [];
  public urlServidor: string = "http://localhost:8080/";
  public usuario: any;
  public detalle: any;

  constructor(private canal: HttpClient) { 
    this.usuario = {};
    this.detalle = {};
    this.listaUsuarios = [];
    this.listaTiposDeSangre = [];
  }

  tiposDeSangre(): void{
    this.canal.get(this.urlServidor + "api/listadesangre").subscribe((resp: any) => {
      this.listaTiposDeSangre = resp;
    });
  }

  listadoUsuarios(): void{
    this.canal.get(this.urlServidor + "api/usuarios").subscribe((resp: any) => {
      this.listaUsuarios = resp;
    });
  }

  buscarNombre(nombre: string): void {
    this.canal.get(this.urlServidor + "api/usuarios/buscar/" + nombre).subscribe((respuesta: any) => {
      console.log("aqui")
      console.log(respuesta)
      this.usuario = respuesta;
    });
  }
  
  obtenerUsuario(id: number): void {
    this.canal.get(this.urlServidor + "api/usuarios/obtener/" + id).subscribe((respuesta: any) => {
      this.usuario = respuesta;
    });
  }


  eliminarUsuario(id: number): void {
    const parametrosPeticion = new HttpParams().set('id', id);
    this.canal.delete(this.urlServidor + "api/usuarios/eliminar", { params: parametrosPeticion }).subscribe(
      (respuesta: any) => {
        this.listadoUsuarios();
      });
  }

  guardarUsuario(nombre: string, edad: string, sangre: string, fecha_registro: number) {
    this.canal.post(this.urlServidor + "api/usuarios", {
      "nombre": nombre,
      "edad": edad,
      "sangre": sangre,
      "fecha_registro": fecha_registro
    },).subscribe((respuesta: any) => {
    });
  }


  actualizarUsuario(id: number, nombre: string, edad: string, sangre: string, fecha_registro: string) {
    console.log(sangre)
    this.canal.put(this.urlServidor + "api/usuarios/actualizar/" + id, {
      "nombre": nombre,
      "edad": edad,
      "sangre": sangre,
      "fecha_registro": fecha_registro
    },).subscribe((respuesta: any) => {
    });
  }


}
