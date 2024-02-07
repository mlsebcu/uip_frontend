import { Component } from '@angular/core';
import { ProfileComponent } from '../../modules/components/profile/profile.component';

@Component({
  selector: 'app-rsidebar',
  standalone: true,
  templateUrl: './rsidebar.component.html',
  styleUrl: './rsidebar.component.scss',
  imports: [ProfileComponent],
})
export class RsidebarComponent {}
