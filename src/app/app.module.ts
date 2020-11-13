import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,   
    
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    
    InputTextModule,
    TableModule,
    DialogModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
