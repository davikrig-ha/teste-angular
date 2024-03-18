import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RequesterComponent } from './components/requester/requester.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, RequesterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
