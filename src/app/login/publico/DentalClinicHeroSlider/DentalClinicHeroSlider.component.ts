import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dental-clinic-hero-slider',
  templateUrl: './dentalclinicheroslider.component.html',
  styleUrls: ['./dentalclinicheroslider.component.css']
})
export class DentalClinicHeroSliderComponent implements OnInit {
  images = [
    { src: 'assets/images/dentist2.jpg', alt: 'Dentist at work' },
    { src: 'assets/images/consultorio-dentistas.jpeg', alt: 'Modern dental clinic' },
    { src: 'assets/images/young-woman-dentist.jpg', alt: 'Advanced dental technology' },
    { src: 'assets/images/valoracion.jpg', alt: 'Patient' },
    { src: 'assets/images/shutterstock_1036178224.jpg', alt: 'Happy patient' }
  ];

  currentIndex = 0;
  intervalId: any;

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide();
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

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
