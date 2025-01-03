import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './blockchain/wallet/wallet.component';
import { ChartComponent } from './blockchain/chart/chart.component';
import { HistoryComponent } from './blockchain/history/history.component';
import { TradeComponent } from './blockchain/trade/trade.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-client',
  imports: [ProfileComponent, WalletComponent, CommonModule, ChartComponent,HistoryComponent,TradeComponent],
  standalone: true,
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  showWallet: boolean = false;

  currentView: string = ''; // This will track which view is currently active

  toggleView() {
    this.showWallet = !this.showWallet;
    this.currentView = ''; // Reset the current view when toggling
  }

  setCurrentView(view: string) {
    this.currentView = view; // Set the current view based on button click
  }

}
