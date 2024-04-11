import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, Password, Response, User, responseValid } from '../interfaces/user.interface';
import { RespuestaLogin } from '../interfaces/respuestalogin.interface';
import { DatosEnviados } from '../interfaces/datosenviados.interface';
import { CreateCita } from '../interfaces/createCita.interface';
import { DataUser } from '../interfaces/dataUser.interface';
import { UpdateUser } from '../interfaces/updateUser.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:3000/'

  getUserByEmail(emai:string){
    return this.http.get<User>(this.url + 'auth/'+emai)
  }
  crearUsuario(userNew:User){
    return this.http.post<User>(this.url + 'auth', userNew)
  }
  cambiarPassword(newPassword:Password,email:string){
    return this.http.patch<User>(this.url + 'auth/'+email, newPassword)
  }
  checkEmail(dataEmail:{email:string}){
    return this.http.post<responseValid>(this.url + 'recuperar-pass',dataEmail)
  }
  checkRespuesta(dataRespuesta:{email:string,respuesta:string}){
    return this.http.post<{status:number,message:string}>(this.url +'recuperar-pass/check-respuesta',dataRespuesta)
  }
  getPregunta(dataEmail:{email:string}){
    return this.http.post<{status:number,question:string}>(this.url + 'recuperar-pass/check-question',dataEmail);
  }
  sendCode(email:Email){
    return this.http.post<Response>(this.url + 'email',email)
  }
  validarUsuario(datos:DatosEnviados){
    return this.http.post<RespuestaLogin>(this.url + 'login',datos)
  }
  addCita(data:CreateCita,id:string){
    return this.http.post<{message:string,status:number}>(this.url + 'auth/citas/'+id,data)
  }
  getDataUser(id:string){
    return this.http.get<DataUser>(this.url + 'auth/user/'+id)
  }
  updateUser(id:string,data:UpdateUser){
    return this.http.patch<UpdateUser>(this.url + 'auth/perfil/'+parseInt(id),data)
  }

}
