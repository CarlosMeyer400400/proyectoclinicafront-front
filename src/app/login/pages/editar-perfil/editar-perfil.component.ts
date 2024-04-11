import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { DataUser } from '../../interfaces/dataUser.interface';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  idUser: string | null = "";
  dataUser: DataUser = {
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    fechaNacimiento: "",
    sexo: "",
    telefono: "",
    correo: "",
    usuario: "",
  };

  myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    apellidop: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/)]],
    apellidom: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    sexo: ['', [Validators.required]],
    fecha: ['', [Validators.required, this.validateAge.bind(this)]],
    nombreu: ['', [Validators.required, Validators.minLength(5)]],
    telefono: ['', [Validators.pattern(/^\d{10}$/), Validators.required]]
  });

  constructor(private fb: FormBuilder, private loginService: LoginService) { }
  mostrarSeleccion(event: any) {
    const sexoSeleccionado = event.target.value;
    if (sexoSeleccionado === "") {
      alert("El campo es obligatorio");
    } else {
      alert("Has seleccionado: " + sexoSeleccionado);
      // Aquí puedes realizar otras acciones basadas en la selección, como enviar el formulario o actualizar la interfaz de usuario.
    }
  }


  onFocusEvent(): void {
    console.log('Enfoque activado para este método');
  }
  ngOnInit() {
    this.idUser = localStorage.getItem('token');
    if (this.idUser !== null) {
      this.loginService.getDataUser(this.idUser).subscribe(data => {
        this.myForm.setValue(
          {
          nombre:data.nombre,
          apellidop:data.apellidoP,
          apellidom:data.apellidoM,
          email:data.correo,
          sexo: data.sexo,
          fecha: data.fechaNacimiento,
          nombreu: data.usuario,
          telefono: data.telefono
        });
        console.log(this.myForm.value)
      })
    }

  }

  // Método de validación personalizado para la edad
  validateAge(control: AbstractControl): ValidationErrors | null {
    const birthdate = new Date(control.value);
    const today = new Date();

    // Validar que la fecha no sea del futuro
    if (birthdate > today) {
      return { 'futureDate': 'La fecha no puede ser del futuro' };
    }

    // Validar que la persona sea mayor de 18 años
    const age = today.getFullYear() - birthdate.getFullYear();
    if (age < 18) {
      return { 'underage': 'La persona debe ser mayor de 18 años' };
    }

    return null;
  }
  updateData() {
    if (this.idUser !== null)
      this.loginService.updateUser(this.idUser, this.myForm.value).subscribe(data => {
        console.log(data)
      })
  }
}
