import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  loginForm: FormGroup;
  passwordVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: UserserviceService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        (res) => {
          console.log('Login Successful:', res);
          console.log(res.data);

          localStorage.setItem('userData', JSON.stringify(res.data));
            this.router.navigate(['/user/profile']);   // Navigate to profile page
            console.log('Navigation successful');
          },
          (error) => {
            console.error('Login Failed:', error);
          }

          // Use Navigation Promise
        //   this.router
        //     .navigate(['/profile'])
        //     .then((success) => {
        //       if (success) {
        //         console.log('✅ Navigation confirmed!');
        //       } else {
        //         console.error('❌ Navigation failed!');
        //       }
        //     })
        //     .catch((err) => console.error('🚨 Navigation error:', err));
        // },
        // (error) => {
        //   console.error('Login Failed:', error);
        // }
      );
    }
  }

  
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
