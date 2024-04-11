import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgendarComponent } from './pages/agendar/agendar.component';
import { HeaderComponent } from './interfaces/header/header.component';
import { FooterComponent } from './interfaces/footer/footer.component';
import { ContactoComponent } from './interfaces/contacto/contacto.component';
import { ServiciosComponent } from './interfaces/servicios/servicios.component';
import { UbicacionComponent } from './interfaces/ubicacion/ubicacion.component';
import { QuienessomosComponent } from './interfaces/quienessomos/quienessomos.component';
import { AvisoPrivacidadComponent } from './interfaces/avisoPrivacidad/avisoPrivacidad.component';
import { TerminosCondicionesComponent } from './interfaces/terminosCondiciones/terminosCondiciones.component';
import { PoliticaCookiesComponent } from './interfaces/politicaCookies/politicaCookies.component';
import { PreguntasComponent } from './interfaces/preguntas/preguntas.component';
import { E404Component } from './interfaces/e404/e404.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { canActivate, canMatch } from './guards/guards.guard';
import { InsumosComponent } from './interfaces/insumos/insumos.component';
const routes: Routes = [
  {
    path: 'user',
    component: LayoutComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'header',
        component: HeaderComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'footer',
        component: FooterComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'contacto',
        component: ContactoComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'ubicacion',
        component: UbicacionComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },

      {
        path: 'crear-cuenta',
        component: CrearCuentaComponent
      },
      {
        path: 'recuperar-password',
        component: RecuperarPasswordComponent
      },
      {
        path: 'quienessomos',
        component: QuienessomosComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'agendar',
        component: AgendarComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: 'avisoprivacidad', component: AvisoPrivacidadComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'terminoscondiciones', component: TerminosCondicionesComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'politicacookies', component: PoliticaCookiesComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'preguntas', component: PreguntasComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'perfil', component: PerfilComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'editarperfil', component: EditarPerfilComponent,
        canActivate: [canActivate],
        canMatch:[canMatch]
      },
      {
        path: 'insumos', component: InsumosComponent,
        canActivate: [canActivate],
        canMatch: [canMatch]
      },
      {
        path: '',
        component: E404Component
      },
      {
        path: '**',
        component: E404Component

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
