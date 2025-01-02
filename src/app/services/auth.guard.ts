import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MockAuthService } from './mock-auth.service'; // Ensure the correct path

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: MockAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('authToken');
    const userRole = localStorage.getItem('userRole');

    // Log values for debugging
    console.log('User Role:', userRole);
    console.log('Token:', token);

    if (token && userRole) {
      const expectedRole = route.data['role']; // Expected role from route data
      console.log('Expected Role:', expectedRole);

      if (userRole === expectedRole) {
        return true; // User has the correct role
      } else {
        console.error('Access denied - insufficient role');
        this.router.navigate(['/unauthorized']); // Redirect to unauthorized page
        return false;
      }
    } else {
      console.error('User not logged in or role missing');
      this.router.navigate(['/login']); // Redirect to login page if not logged in
      return false;
    }
  }
}
