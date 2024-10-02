import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dental-clinic-hero-slider',
  templateUrl: './dentalclinicheroslider.component.html',
  styleUrls: ['./dentalclinicheroslider.component.css']
})
export class DentalClinicHeroSliderComponent implements OnInit, OnDestroy {
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startAutoSlide();
    this.checkLoginStatus(); // Verificar si el usuario ha iniciado sesión
  }

  // Verificar el estado de inicio de sesión
  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('token'); // Cambia 'token' por lo que estés usando para gestionar el estado de sesión
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  selectSlide(index: number): void {
    this.currentIndex = index;
  }

  // Función para manejar la redirección al reservar una cita
  reservarCita(): void {
    if (this.isLoggedIn) {
      this.router.navigate(['/user/agendar']); // Redirigir a la página de agendar si ha iniciado sesión
    } else {
      this.router.navigate(['/']); // Redirigir a la página principal si no ha iniciado sesión
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
