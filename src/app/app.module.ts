import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlbaseInterceptor } from './core/interceptors/urlbase.interceptor';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';
import { RickandmortyPipe } from './rickandmorty/rickandmorty.pipe';
import { HomeComponent } from './home/home.component';
import  { NgxPaginationModule }  from  'ngx-pagination' ;

@NgModule({
  declarations: [
    AppComponent,
    RickandmortyComponent,
    RickandmortyPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UrlbaseInterceptor, multi: true},
    {provide: 'BASE_API_URL', useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
