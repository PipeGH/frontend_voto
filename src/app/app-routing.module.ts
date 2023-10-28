import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistAvanceComponent } from './regist-avance/regist-avance.component';
import { TablasEspecificasComponent } from './tablas-especificas/tablas-especificas.component';
import { TablasGeneralesComponent } from './tablas-generales/tablas-generales.component';
import { AuthGuard } from './guardas/auth.guard';

//,
const routes: Routes = [
  {
    path: 'registro',
    component: RegistAvanceComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'generales',
    component: TablasGeneralesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'especificos',
    component: TablasEspecificasComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
