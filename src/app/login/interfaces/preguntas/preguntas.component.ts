import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})


export class PreguntasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAnswer: boolean = false;

    toggleAnswer() {
        this.showAnswer = !this.showAnswer;
    }
}
