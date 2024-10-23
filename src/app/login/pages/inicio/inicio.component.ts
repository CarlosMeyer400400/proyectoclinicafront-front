import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { DataServicio } from '../../interfaces/dataServicio.interface';
import AOS from 'aos'; // Import 'aos' as default

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  servicios: DataServicio[] = [];

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', () => {
      AOS.refresh();
    });
    this.getServicios(); // Llama a getServicios() para obtener los servicios al inicializar el componente
  }

  images = [
    { src: 'assets/images/dentist2.jpg', alt: 'Dentist at work' },
    { src: 'assets/images/consultorio-dentistas.jpeg', alt: 'Modern dental clinic' },
    { src: 'assets/images/young-woman-dentist.jpg', alt: 'Advanced dental technology' },
    { src: 'assets/images/valoracion.jpg', alt: 'Patient' },
    { src: 'assets/images/shutterstock_1036178224.jpg', alt: 'Happy patient' }
  ];

  currentIndex = 0;
  intervalId: any;
  isLoggedIn: boolean = false; // Variable para verificar si el usuario ha iniciado sesión

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  selectSlide(index: number): void {
    this.currentIndex = index;
  }
  
  getServicios() {
    this.loginService.getServicios().subscribe(
      (data) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error obteniendo servicios:', error);
      }
    );
  }
  navegar() {
    this.router.navigate(['/']);
  }

  // Define your image paths here
  logosinfondo: string = "assets/images/logosinfondo.png";
  logoblanco: string = "assets/images/logoblanco.png";
  logo: string = "assets/images/logo.png";
  servicio1: string = "assets/images/servicio1.jpg";
  servicio2: string = "assets/images/servicio2.jpg";
  servicio3: string = "assets/images/servicio3.jpg";
  servicio4: string = "assets/images/servicio4.jpg";
  servicio5: string = "assets/images/servicio5.jpg";
  servicio6: string = "assets/images/servicio6.jpg";
  brackets: string = "assets/images/brackets.jpg";
  implante: string = "assets/images/implante.jpg";
  valoracion: string = "assets/images/valoracion.jpg";
  extraccion: string = "assets/images/extraccion.jpg";
  limpieza: string = "assets/images/limpieza.jpg";
}
