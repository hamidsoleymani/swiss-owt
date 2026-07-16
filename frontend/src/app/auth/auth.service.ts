import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly username = signal(
    sessionStorage.getItem('username') ?? ''
  );

  readonly password = signal(
    sessionStorage.getItem('password') ?? ''
  );

  login(username: string, password: string): void {

    this.username.set(username);
    this.password.set(password);

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
  }

  logout(): void {

    this.username.set('');
    this.password.set('');

    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
  }

  isLoggedIn(): boolean {
    return this.username() !== '' &&
      this.password() !== '';
  }

  authorizationHeader(): string {
    return 'Basic ' + btoa(
      `${this.username()}:${this.password()}`
    );
  }
}
