import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataInformacion } from '../dataInformacion.interface';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {
  informacion: DataInformacion = {
    mision: '',
    vision: '',
    quienessomos: ''
  };

  imageSize: number = 100; // Tamaño inicial de la imagen
  largerImageSize: number = 150; // Tamaño de la imagen al hacer clic/tocar
  showMission: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.getDataInformacion();
  }

  getDataInformacion() {
    const idInformacion = '1'; // Provide the necessary ID for the API call
    this.loginService.getDataInformacion(idInformacion).subscribe(
      (data: DataInformacion) => {
        this.informacion = data;
      },
      (error) => {
        console.error('Error obteniendo información:', error);
      }
    );
  }

  toggleMission() {
    this.showMission = !this.showMission;
  }

  handleTouchStart() {
    // Implementa la lógica aquí para manejar el evento de inicio de toque
    this.imageSize = this.largerImageSize;
  }
}
