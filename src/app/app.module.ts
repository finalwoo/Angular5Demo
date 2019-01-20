import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// BrowserAnimationsModule import 구문 추가
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Table Component 사용을 위한 MatTableModule import
import { MatTableModule } from '@angular/material/table'

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // BrowserAnimationsModule 추가
    MatTableModule            // MatTableModule 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
