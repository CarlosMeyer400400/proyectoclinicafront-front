import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerpublico',
  templateUrl: './headerpublico.component.html',
  styleUrls: ['./headerpublico.component.css']
})
export class HeaderpublicoComponent implements OnInit {
  menuVariable: boolean = false;
  menu_icon_variable: boolean = false;

  openMenu() {
    this.menuVariable = !this.menuVariable;
  }

  constructor() { }

  ngOnInit() {
  }

  logoblanco: string = "assets/images/logoblanco.png"
}
