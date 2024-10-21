import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { DataPreguntas } from '../../interfaces/dataPreguntas.interface';

@Component({
  selector: 'app-preguntaspublico',
  templateUrl: './preguntaspublico.component.html',
  styleUrls: ['./preguntaspublico.component.css']
})
export class PreguntaspublicoComponent implements OnInit {

  preguntas: DataPreguntas[] = [];
  expandedIndex: number | null = null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getPreguntas();
  }

  getPreguntas() {
    this.loginService.getPreguntas().subscribe(
      (data) => {
        this.preguntas = data;
      },
      (error) => {
        console.error('Error obteniendo preguntas:', error);
      }
    );
  }

  // Funciones para manejar el colapso de las preguntas
  toggleCollapse(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex === index;
  }
}
