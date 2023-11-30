import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ListadoComponent
  },
  {
    path: 'prueba',
    component: PruebaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
