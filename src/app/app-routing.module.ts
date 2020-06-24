import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConsultarPersonaComponent} from './consultar-persona/consultar-persona.component';
import {CrearPersonaComponent} from './crear-persona/crear-persona.component';

const routes: Routes = [
  {path: 'consultar-persona', component: ConsultarPersonaComponent},
  {path: 'crear-persona', component: CrearPersonaComponent},

  { path: '', redirectTo: 'consultar-persona', pathMatch: 'full' },
  { path: '**', component: ConsultarPersonaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
