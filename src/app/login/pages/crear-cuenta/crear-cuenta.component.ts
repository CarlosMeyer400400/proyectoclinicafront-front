import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent implements OnInit {
  logosinfondo: string = "assets/images/logosinfondo.png"
  capchaValid: boolean = true;
  //DEFINIR VARIABLE
  profilePicUrl: string | ArrayBuffer | null = null; // Para almacenar la URL de la imagen seleccionada

  siteKey: string;
  passwordVisible1: boolean = false;
  passwordVisible2: boolean = false;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {

    //AGREGAR LA CLAVE DEL SITIO WEB

    this.siteKey = '6Ld9vlUpAAAAAIBxg_WAyAL3v782D0Sv_HefWBjy';

  }
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  myForm: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
    apellidop: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/)]],
    apellidom: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜ\s]*$/)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    sexo: ['', [Validators.required]],
    fecha: ['', [Validators.required, this.validateAge.bind(this)]],
    nombreu: ['', [Validators.required, Validators.minLength(5)]],
    contrasena: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    contrasena2: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/)]],
    telefono: ['', [Validators.pattern(/^\d{10}$/), Validators.required]],
    pregunta: ['', [Validators.required]],
    respuesta: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]*$/)]]

    /*recaptcha: ['', Validators.required]*/
  }, {
    validators: [
      this.isFieldOneEqualFieldTwo('password', 'password2')

    ]
  })
 // Método para seleccionar archivo de imagen
 onFileSelected(event: any): void {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profilePicUrl = e.target.result; // Previsualización de la imagen
    };
    reader.readAsDataURL(file);
  }
}

 // Método para activar el input de archivo cuando se hace clic en el botón
 triggerFileInput(): void {
  const fileInput = document.getElementById('file-input') as HTMLInputElement;
  if (fileInput) {
    fileInput.click();
  }
}


  public isFieldOneEqualFieldTwo(field1: string, field2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;

      if (fieldValue1 !== fieldValue2) {
        formGroup.get(field2)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }

      formGroup.get(field2)?.setErrors(null);
      return null;
    }

  }
  // FUNCIÓN PARA VALIDACIÓN DE LA FECHA DE NACIMIENTO
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



  getData() {
    if (this.myForm.invalid)
      return
    console.log(this.myForm.value);
    this.loginService.crearUsuario(this.myForm.value).subscribe(
      data => {
        console.log(data)
        // Muestra un mensaje de éxito con diseño Bootstrap
        this.showAlert('Cuenta creada correctamente', 'alert-success');

        // Redirige al usuario a la página de inicio después de un breve tiempo
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      error => {
        // Maneja errores aquí
        console.error(error);
        // Muestra un mensaje de error al usuario con diseño Bootstrap
        this.showAlert('Error al crear la cuenta. Por favor, revise si los datos son correctos.', 'alert-danger');
      }
    );
  }

  showAlert(message: string, alertClass: string) {
    // Crea un div para el mensaje
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert ${alertClass} fixed-top d-flex align-items-center justify-content-center`;
    alertDiv.textContent = message;
    alertDiv.style.fontSize = '20px'; // Cambia el tamaño del texto

    // Agrega el mensaje al cuerpo del documento
    document.body.appendChild(alertDiv);

    // Elimina el mensaje después de unos segundos
    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  }

  activarBtnCapcha(event: string) {
    this.capchaValid = false;
  }
  activarBtnCrear() {
    if (this.myForm.invalid === false && this.capchaValid === false) {
      console.log("3:", this.myForm.invalid, this.capchaValid)
      return false
    }
    else {
      return true
    }
  }
  togglePasswordVisibility(field: number): void {
    if (field === 1) {
      this.passwordVisible1 = !this.passwordVisible1;
    } else if (field === 2) {
      this.passwordVisible2 = !this.passwordVisible2;
    }
  }
  onFocusEvent(): void {
    console.log('Enfoque activado para este método');
}

mostrarColorBoton: boolean = false;

mouseOver: boolean = false;

  onMouseOver() {
    this.mouseOver = true;
  }
 
  mostrarSeleccion(event: any) {
    const sexoSeleccionado = event.target.value;
    if (sexoSeleccionado === "") {
      alert("El campo es obligatorio");
    } else {
      alert("Has seleccionado: " + sexoSeleccionado);
      // Aquí puedes realizar otras acciones basadas en la selección, como enviar el formulario o actualizar la interfaz de usuario.
    }
  }

  cambiarColorBoton(activar: boolean) {
    this.mostrarColorBoton = activar;
  }

  ngOnInit() {


  }
}