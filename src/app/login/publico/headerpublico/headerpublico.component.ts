import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerpublico',
  templateUrl: './headerpublico.component.html',
  styleUrls: ['./headerpublico.component.css']
})
export class HeaderpublicoComponent implements OnInit {
  isOpen: boolean = false; // Controla si el menú lateral está abierto
  isMobile: boolean = false; // Detecta si está en móvil o no
  logoblanco: string = 'assets/images/logoblanco.png'; // Ruta del logo

  constructor() {}

  ngOnInit(): void {
    this.checkWindowSize(); // Chequea el tamaño de la ventana cuando se inicia
  }

  // Alternar el menú lateral (Sheet)
  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  // Cierra el menú
  closeMenu(): void {
    this.isOpen = false;
  }

  // Detecta si el usuario está en móvil o en pantalla grande
  @HostListener('window:resize', ['$event'])
  checkWindowSize(): void {
    this.isMobile = window.innerWidth <= 768; // Considera móvil si el ancho es <= 768px
  }
}
