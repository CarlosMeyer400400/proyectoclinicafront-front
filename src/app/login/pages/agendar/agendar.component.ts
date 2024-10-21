import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { DataServicio } from '../../interfaces/dataServicio.interface';
import { DataFeedback } from '../../interfaces/dataFeedback.interface';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  servicios: DataServicio[] = [];  // Lista de servicios
  feedbackForm: FormGroup;         // Formulario de feedback
  feedbackRespondido: boolean = false; // Para saber si el usuario ya ha respondido el feedback
  citaAgendadaCorrectamente: boolean = false; // Para saber si la cita se agendó correctamente
  myForm: FormGroup; // Formulario para agendar cita

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    // Formulario para agendar cita
    this.myForm = this.fb.group({
      fecha: ['', [Validators.required, this.validateAge.bind(this)]],
      hora: ['', [Validators.required]],
      motivo: ['', [Validators.required]],
      dentista: ['', [Validators.required]],
    });

    // Formulario para el feedback
    this.feedbackForm = this.fb.group({
      respuesta: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.getServicios();
    this.verificarFeedback();
  }

  mostrarSeleccion(event: any) {
    const seleccion = event.target.value;
    if (!seleccion) {
      alert("El campo es obligatorio");
    } else {
      alert("Has seleccionado: " + seleccion);
    }
  }

  showAlert(message: string, alertClass: string) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${alertClass} fixed-top d-flex align-items-center justify-content-center`;
    alertDiv.textContent = message;
    alertDiv.style.fontSize = '20px';
    document.body.appendChild(alertDiv);
    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  }

  validateAge(control: any): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    if (selectedDate < today) {
      return { pastDate: true };
    }
    return null;
  }

  addCita() {
    const token = localStorage.getItem('token');
    if (token === null) return; // Verificar si el token es nulo

    console.log('Intentando agendar la cita con los siguientes datos:', this.myForm.value);

    this.loginService.addCita(this.myForm.value, token).subscribe(data => {
      if (data.status === 200) {
        this.showAlert('Cita agendada correctamente', 'alert-success');
        console.log('Cita agendada correctamente'); // Mensaje en consola para éxito
        this.citaAgendadaCorrectamente = true;  // Marcar la cita como agendada correctamente
        this.verificarFeedback();               // Verificar si ya se ha dado feedback
        this.myForm.reset();                     // Limpiar el formulario
      } else {
        console.error('Error al agendar la cita:', data); // Mensaje en consola para errores
      }
    }, error => {
      console.error('Error en la solicitud para agendar la cita:', error); // Mensaje en consola para errores
    });
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

  verificarFeedback() {
    const usuarioId = localStorage.getItem('token'); // Obtener el ID desde el token
    if (usuarioId === null) return; // Verificar si el usuarioId es nulo
    this.loginService.getFeedback().subscribe(
      (feedback: DataFeedback[]) => {
        const feedbackUsuario = feedback.find(fb => fb.usuario?.id_usuario === Number(usuarioId));
        this.feedbackRespondido = !!feedbackUsuario; // Verifica si ya respondió el feedback
      },
      (error) => {
        console.error('Error al verificar el feedback:', error);
      }
    );
  }

  enviarFeedback() {
    if (this.feedbackForm.valid) {
      const feedbackData = {
        respuesta: this.feedbackForm.value.respuesta
      };
      const usuarioId = localStorage.getItem('token'); // Obtener el ID desde el token
      if (usuarioId === null) return; // Verificar si el usuarioId es nulo
      this.loginService.createFeedback(feedbackData, usuarioId).subscribe(
        (data) => {
          this.showAlert('Gracias por tu feedback', 'alert-success');
          this.feedbackRespondido = true; // Marcar como respondido
        },
        (error) => {
          console.error('Error enviando feedback:', error);
        }
      );
    }
  }
}
