import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly username = signal('');
  readonly password = signal('');

  login(username: string, password: string): void {
    this.username.set(username);
    this.password.set(password);
  }

  logout(): void {
    this.username.set('');
    this.password.set('');
  }

  isLoggedIn(): boolean {
    return this.username() !== '' && this.password() !== '';
  }

  authorizationHeader(): string {

    return 'Basic ' + btoa(
      `${this.username()}:${this.password()}`
    );
  }
}
