import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistAvanceComponent } from './regist-avance/regist-avance.component';
import { TablasEspecificasComponent } from './tablas-especificas/tablas-especificas.component';
import { TablasGeneralesComponent } from './tablas-generales/tablas-generales.component';

//, canActivate: [authGuard]
const routes: Routes = [
  {
    path: 'registro',
    component: RegistAvanceComponent,
  },
  {
    path: 'generales',
    component: TablasGeneralesComponent,
  },
  {
    path: 'especificos',
    component: TablasEspecificasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
