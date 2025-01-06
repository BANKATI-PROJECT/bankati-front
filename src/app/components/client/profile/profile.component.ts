import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Pour ngModel
import { MatIconModule } from '@angular/material/icon';  // Si vous utilisez Angular Material pour les icônes
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatButtonModule } from '@angular/material/button'; // Si vous utilisez des boutons Material dans le sidenav
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatSlideToggleModule,
    RouterModule
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  client: any;
  balance: number = 1500000; // Solde initial
  amountToUpdate: number = 0; // Montant à ajuster
  isInputVisible: boolean = false; // Variable pour afficher/masquer le champ de saisie
  isSidenavOpened: boolean = false; // Variable pour gérer l'état du sidenav

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Vous pouvez faire des requêtes HTTP ici pour obtenir des données utilisateur réelles
  }

  // Fonction pour afficher/masquer le champ de saisie
  toggleInput(): void {
    this.isInputVisible = !this.isInputVisible;
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

  // Navigation vers différentes pages
  navigateToTransfer() {
    console.log('Navigating to Transfer page');
  }

  navigateToCards() {
    console.log('Navigating to Cards page');
    this.router.navigate(['/cards']); // Utilisation du Router d'Angular pour naviguer vers la page des cartes
  }

  navigateToSecurity() {
    console.log('Navigating to Security Settings page');
  }

  navigateToPreferences() {
    console.log('Navigating to Preferences page');
  }

  navigateToCreditCard() {
    this.router.navigate(['/credit-card']); // Utilisation du Router d'Angular pour naviguer vers la page des cartes de crédit
  }

  // Gestion de l'ouverture/fermeture du sidenav
  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened; // Basculer l'état du sidenav
  }
}
