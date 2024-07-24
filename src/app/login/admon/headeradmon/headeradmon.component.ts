import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataUser } from '../../interfaces/dataUser.interface';

@Component({
  selector: 'app-headeradmon',
  templateUrl: './headeradmon.component.html',
  styleUrls: ['./headeradmon.component.css']
})
export class HeaderadmonComponent implements OnInit {
  dataUser: DataUser = {
    nombre: "",
    apellidop: "",
    apellidom: "",
    fecha: "",
    sexo: "",
    telefono: "",
    email: "",
    nombreu: "",
  };
  constructor(private router: Router, private route: ActivatedRoute) { }

  menuVariable: boolean = false;

  openMenu() {
    this.menuVariable = !this.menuVariable;
  }

  setActiveLink(event: Event) {
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => item.classList.remove('active-link'));
    (event.target as HTMLElement).parentElement?.classList.add('active-link');
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit() {}

  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  logoblanco: string = "assets/images/logoblanco.png";
}
