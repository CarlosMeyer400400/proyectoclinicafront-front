import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataUser } from '../../interfaces/dataUser.interface';

@Component({
  selector: 'app-admonusuarios',
  templateUrl: './admonusuarios.component.html',
  styleUrls: ['./admonusuarios.component.css']
})
export class AdmonusuariosComponent implements OnInit {
  dataUsers: DataUser[] = [];
  mostrarDialogo = false;
  confirmarEliminarEmail: string | null = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    this.loginService.getAuth().subscribe(
      (data: DataUser[]) => {
        this.dataUsers = data;
      },
      error => {
        console.error('Error al obtener los datos de los usuarios:', error);
      }
    );
  }

  mostrarDialogoEliminar(email: string) {
    this.mostrarDialogo = true;
    this.confirmarEliminarEmail = email;
  }

  confirmarEliminacion() {
    if (this.confirmarEliminarEmail) {
      this.eliminarUsuario(this.confirmarEliminarEmail);
    }
  }

  eliminarUsuario(email: string) {
    this.loginService.deleteUser(email).subscribe(
      response => {
        console.log('Usuario eliminado correctamente:', response);
        this.getUserData();
        this.cerrarDialogo();
      },
      error => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }

  cerrarDialogo() {
    this.mostrarDialogo = false;
    this.confirmarEliminarEmail = null;
  }
}
