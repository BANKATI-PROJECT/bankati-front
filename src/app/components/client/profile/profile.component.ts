import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'; // Import MatSidenavModule
import { MatButtonModule } from '@angular/material/button'; // If you use material buttons in the sidenav
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule for icons
import { Router, RouterModule } from '@angular/router';

// Define an interface for the user data structure (optional but recommended)
interface User {
  profilePicture: string;
  fullName: string;
  accountStatus: string;
  accountNumber: string;
  balance: {
    total: number;
    available: number;
  };
  transactions: Array<{
    date: string;
    amount: number;
    type: string;
  }>;
  notifications: Array<{
    message: string;
    date: string;
  }>;
  securityAlerts: Array<{
    date: string;
    message: string;
  }>;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatSlideToggleModule, MatIconModule,RouterModule],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  // Example user data for demonstration purposes
  user: User = {
    profilePicture: 'assets/profile-pic.jpg', // Link to profile picture
    fullName: 'John Doe',
    accountStatus: 'Active',
    accountNumber: '1234567890',
    balance: {
      total: 5000,
      available: 4500
    },
    transactions: [
      { date: '2025-01-02', amount: 100, type: 'Transfer to User B' },
      { date: '2025-01-01', amount: 200, type: 'Deposit' },
      { date: '2024-12-30', amount: 50, type: 'Bill Payment' }
    ],
    notifications: [
      { message: 'Your bill is due tomorrow!', date: '2025-01-01' },
      { message: 'Security alert: New login from an unknown device.', date: '2024-12-29' }
    ],
    securityAlerts: [
      { date: '2025-01-01', message: 'Unusual login detected.' },
      { date: '2024-12-25', message: 'Password changed successfully.' }
    ]
  };

  isSidenavOpened: boolean = false; // This variable will toggle the sidenav

  constructor(private router: Router) { }

  ngOnInit(): void {
    // You can make HTTP requests to get real user data here
  }

  // Example navigation functions for buttons
  navigateToBills() {
    console.log('Navigating to Bills page');
  }

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
