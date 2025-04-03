import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 
  user: any = {};
  oldPassword: string = '';
  newPassword: string = ''; 
  confirmPassword: string = '';

  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const userData = localStorage.getItem('userData');

    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  togglePasswordVisibility(inputId: string) {
    const input = document.getElementById(inputId) as HTMLInputElement;
    const icon = document.getElementById(`toggle${inputId.charAt(0).toUpperCase() + inputId.slice(1)}`) as HTMLElement;

    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('bi-eye-slash');
      icon.classList.add('bi-eye'); 
    } else {
      input.type = 'password';
      icon.classList.remove('bi-eye');
      icon.classList.add('bi-eye-slash');
    }
  }
}


