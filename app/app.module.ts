import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { LayoutComponent } from './user/layout/layout.component';
import { RouterModule } from '@angular/router';
import { UserserviceService } from '../app/services/userservice.service';
import { NavComponent } from './user/nav/nav.component'; 
import { FooterComponent } from './user/footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LayoutComponent,
    NavComponent, 
    FooterComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    RouterModule, 
    FormsModule, 
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
