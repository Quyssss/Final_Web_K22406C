import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { DangnhapComponent } from './core/components/dangnhap/dangnhap.component';

@NgModule({
  declarations: [
    AppComponent,
    DangnhapComponent
  ],
  imports: [
    BrowserModule,
    AppComponent,
    FormsModule,
  ],
  
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }