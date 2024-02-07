import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RsidebarComponent } from '../rsidebar/rsidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [SidebarComponent, RsidebarComponent],
})
export class DashboardComponent {
  saludo: string = '';
  userActive: string = 'Marvin';

  sizeIcon: string = '5';

  ngOnInit() {
    this.getGreeting();
  }

  getGreeting() {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      this.saludo = 'Buenos días';
    } else if (currentTime >= 12 && currentTime < 18) {
      this.saludo = 'Buenas tardes';
    } else {
      this.saludo = 'Buenas noches';
    }
  }
}
