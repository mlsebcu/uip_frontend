import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  user: any = {
    username: 'admin',
    password: 'admin',
  };

  constructor(private authService: AuthService, private router: Router) {}

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.user).subscribe(
      (response) => {
        if (response && response.access_token) {
          this.authService.setAccessToken(response.access_token);
          this.router.navigate(['/dashboard']);
        } else {
          console.error('Token de acceso no válido:', response);
        }
      },
      (error) => {
        console.log(this.user);
        console.error('Error durante el inicio de sesión:', error);
      }
    );
  }
}
