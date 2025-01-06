import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardHolder: string = 'Nom de l\'Utilisateur'; // You can set this based on user input or session
  amount: number = 0; // Default amount
  cards: any[] = []; // Array to store card information

  onSubmit() {
    if (this.amount > 0) {
      const newCard = {
        cardHolder: this.cardHolder, // Set the card holder's name here
        amount: this.amount
      };
      this.cards.push(newCard); // Add the new card to the list
      this.amount = 0; // Reset the amount after adding the card
    } else {
      alert("Veuillez entrer un montant valide");
    }
  }
}