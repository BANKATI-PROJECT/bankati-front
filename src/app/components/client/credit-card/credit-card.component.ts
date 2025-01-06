import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {
  owner: string = '';
  cvv: string = '';
  cardNumber: string = '';
  selectedMonth: string = 'Jan';
  selectedYear: string = '2020';
  message: string = '';
  isSuccess: boolean = false;

  // Méthode appelée lors du clic sur le bouton de confirmation
  ajouter(): void {
    // Validation des champs
    if (this.owner && this.cvv && this.cardNumber && this.selectedMonth && this.selectedYear) {
      // Si tous les champs sont remplis, afficher un message de succès
      this.message = 'Cart ajouté avec succès !';
      this.isSuccess = true;
    } else {
      // Si des champs sont manquants, afficher un message d'erreur
      this.message = 'Tous les champs doivent être remplis.';
      this.isSuccess = false;
    }
    
    // Log des données (pour le débogage)
    console.log('Owner:', this.owner);
    console.log('CVV:', this.cvv);
    console.log('Card Number:', this.cardNumber);
    console.log('Expiration Date:', this.selectedMonth, this.selectedYear);
  }
}