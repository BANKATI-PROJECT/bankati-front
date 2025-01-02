import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-client',
  imports: [ProfileComponent],
  standalone: true,
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

}
