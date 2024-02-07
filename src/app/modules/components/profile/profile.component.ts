import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private authService: AuthService, private router: Router) {}

  showOptions: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
