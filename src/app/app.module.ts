import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import {Component1} from './component1/component1'
import {Component1Child} from './component1/component1.child';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog'
import {Dialog1} from './component1/dialog'
@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component1Child,
    Dialog1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    Dialog1
  ]
})
export class AppModule { }
