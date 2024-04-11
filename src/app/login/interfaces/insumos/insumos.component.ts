import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa FormBuilder y FormGroup

@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent  implements OnInit{
  servicioForm!: FormGroup; // Define una variable para el formulario
  resultados: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.servicioForm = this.fb.group({
      selectedService: ['ortodoncia', Validators.required],
      ligadurasQuantity: [0],
      bracketsQuantity: [0],
      arcoQuantity: [0],
      incremento: [0.10, Validators.required]
    });
  }

  calcular() {
    const service = this.servicioForm.value.selectedService;
    const ligaduras = this.servicioForm.value.ligadurasQuantity;
    const brackets = this.servicioForm.value.bracketsQuantity;
    const arco = this.servicioForm.value.arcoQuantity;
    const incremento = this.servicioForm.value.incremento;

    // Realizar los cálculos aquí para los insumos correspondientes al servicio

    // Por ejemplo, para Ortodoncia (Brackets):
    const k = 0.0158; // Valor de k obtenido del procedimiento
    const ligadurasResult = Math.round(ligaduras * Math.exp(k * 12));
    const bracketsResult = Math.round(brackets * Math.exp(k * 12));
    const arcoResult = Math.round(arco * Math.exp(k * 12));

    this.resultados = {
      ligaduras: ligadurasResult,
      brackets: bracketsResult,
      arco: arcoResult
    };
  }
}