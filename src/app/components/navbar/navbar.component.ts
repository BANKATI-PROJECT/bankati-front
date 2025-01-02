import { Component } from '@angular/core';
import { MockAuthService } from '../../services/mock-auth.service'; // Update path as needed
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class NavbarComponent {
  constructor(private authService: MockAuthService, private router: Router) {}

  isLoggedIn(): boolean {
    console.log('Logged in status:', this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }

  isLoggedOut(): boolean {
    return this.authService.isLoggedOut();
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  isAgent(): boolean {
    return this.authService.isAgent();
  }

  isClient(): boolean {
    return this.authService.isClient();
  }

  // Logout method: Removes authentication data and redirects
  logout() {
    this.authService.logout().subscribe(
      () => {
        // Already handling localStorage cleanup inside MockAuthService
        alert('Déconnexion réussie');

        // Redirect to home or login page after successful logout
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle logout error (if any)
        alert('Erreur lors de la déconnexion : ' + error);

        // Redirect to home or login page in case of error
        this.router.navigate(['/']);
      }
    );
  }
}
