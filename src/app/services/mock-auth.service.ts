import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface LoginResponse {
  role: string;
  token: string;
  responseType: string;
}

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  private mockRole: string | null = null; // Initially, no role
  private mockToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4ifQ.VRYPXofMEQ0kcIzz0B2gBrsp0hZjtkxVt9s3OD2u9Eo';

  // Simulating login with different credentials for each role
  login(username: string, password: string): Observable<LoginResponse | null> {
    let mockRole: string | null = null;

    // Simulate role assignment based on the submitted credentials
    if (username === 'admin' && password === 'admin123') {
      mockRole = 'ADMIN';
    } else if (username === 'agent' && password === 'agent123') {
      mockRole = 'AGENT';
    } else if (username === 'client' && password === 'client123') {
      mockRole = 'CLIENT';
    } else {
      // Invalid credentials handling
      return of(null);  // Simulate login failure
    }

    // Simulate the response you'd expect from the backend
    const mockResponse: LoginResponse = { role: mockRole, token: this.mockToken, responseType: 'redirect' };

    // Store mock data in localStorage
    localStorage.setItem('userRole', mockRole);
    localStorage.setItem('authToken', this.mockToken);

    // Update internal state with mock data
    this.mockRole = mockRole;
    this.mockToken = this.mockToken;

    // Return an observable with mock data
    return of(mockResponse);
  }

  // Simulate logout
  logout(): Observable<void> {
    localStorage.removeItem('userRole');
    localStorage.removeItem('authToken');
    this.mockRole = null;
    return of();
  }

  // Get the role of the user
  getRole(): string | null {
    return localStorage.getItem('userRole'); // Retrieve role from localStorage
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.getRole() !== null;
  }

  // Check if the user is logged out
  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  // Check if the user is an admin
  isAdmin(): boolean {
    return this.getRole() === 'ADMIN';
  }

  // Check if the user is an agent
  isAgent(): boolean {
    return this.getRole() === 'AGENT';
  }

  // Check if the user is a client
  isClient(): boolean {
    return this.getRole() === 'CLIENT';
  }

  // Simulate first login check
  isFirstLogin(): boolean {
    return true; // Simulate that it's the first login
  }

  // Complete the first login process (just a simulation)
  completeFirstLogin(): void {
    localStorage.setItem('firstLogin', 'false');
  }
}
