import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class AboutComponent {
  agencies = [
    { name: 'IAM RECHARGES', imageUrl: 'assets/agencies/IAM-image.jpg' },
    { name: 'REDAL', imageUrl: 'assets/agencies/REDAL.jpeg' },
    { name: 'AMANDIS TANGER', imageUrl: 'assets/agencies/AMANDIS.png' },
    { name: 'IAM RECHARGES', imageUrl: 'assets/agencies/IAM-image.jpg' },
    { name: 'AMANDIS TANGER', imageUrl: 'assets/agencies/AMANDIS.png' },
    { name: 'REDAL', imageUrl: 'assets/agencies/REDAL.jpeg' }
    // Ajoutez d'autres agences ici
  ];
}
