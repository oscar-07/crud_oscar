import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

export const routes: Routes = [
    {path: "", redirectTo: "/usuarios", pathMatch: "full"},
    {path: "usuarios", component: ListaUsuariosComponent},
    {path: "usuarios/alta", component: AltaUsuarioComponent},
    {path: "usuarios/detalle/:id", component: DetalleUsuarioComponent},
    {path: "usuarios/editar/:id", component: EditarUsuarioComponent}
];
