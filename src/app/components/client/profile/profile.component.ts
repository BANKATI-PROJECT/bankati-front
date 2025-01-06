<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Pour ngModel
import { MatIconModule } from '@angular/material/icon';  // Si vous utilisez Angular Material pour les icônes
=======
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatButtonModule } from '@angular/material/button'; // If you use material buttons in the sidenav
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule for icons
import { Router, RouterModule } from '@angular/router';
>>>>>>> 086210ad6ce451818ed58e20ff86b0c8866d4343


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
<<<<<<< HEAD
      imports: [
        CommonModule,FormsModule,MatIconModule
       
      ],
=======
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatSlideToggleModule, MatIconModule,RouterModule],
  encapsulation: ViewEncapsulation.None
>>>>>>> 086210ad6ce451818ed58e20ff86b0c8866d4343
})
export class ProfileComponent implements OnInit {
  client: any;
  balance: number = 1500000; // Solde initial
  amountToUpdate: number = 0; // Montant à ajuster
  isInputVisible: boolean = false; // Variable pour afficher/masquer le champ de saisie

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

<<<<<<< HEAD
  // Fonction pour afficher/masquer le champ de saisie
  toggleInput(): void {
    this.isInputVisible = !this.isInputVisible;
=======
  constructor(private router: Router) { }

  ngOnInit(): void {
    // You can make HTTP requests to get real user data here
>>>>>>> 086210ad6ce451818ed58e20ff86b0c8866d4343
  }

  // Mise à jour du solde
  updateBalance(): void {
    if (this.amountToUpdate !== 0) {
      this.balance += this.amountToUpdate;

      // Vérification pour éviter un solde négatif
      if (this.balance < 0) {
        alert('Le solde ne peut pas être négatif.');
        this.balance = 0; // Remise à zéro si le solde devient négatif
      }

      alert(`Le solde a été mis à jour à ${this.balance} Dh.`);
    } else {
      alert('Veuillez entrer un montant valide.');
    }
  }

<<<<<<< HEAD
}
=======
  navigateToTransfer() {
    console.log('Navigating to Transfer page');
  }

  navigateToCards() {
    console.log('Navigating to Cards page');
    this.router.navigate(['/cards']); // Use Angular Router to navigate to the Cards page
  }
  navigateToSecurity() {
    console.log('Navigating to Security Settings page');
  }

  navigateToPreferences() {
    console.log('Navigating to Preferences page');
  }
  navigateToCreditCard() {
    this.router.navigate(['/credit-card']); // Use Angular Router to navigate to the Credit Card page
  }


  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened; // Toggle the sidenav state
  }
}
>>>>>>> 086210ad6ce451818ed58e20ff86b0c8866d4343
