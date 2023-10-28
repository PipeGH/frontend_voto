import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablasGeneralesComponent } from './tablas-generales/tablas-generales.component';
import { TablasEspecificasComponent } from './tablas-especificas/tablas-especificas.component';
import { RegistAvanceComponent } from './regist-avance/regist-avance.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroGeneralPipe } from './pipes/filtro-general.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TablasGeneralesComponent,
    TablasEspecificasComponent,
    RegistAvanceComponent,
    FiltroGeneralPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
