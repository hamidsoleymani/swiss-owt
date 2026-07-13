import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  username = signal('');
  password = signal('');

  login(): void {

    this.authService.login(
      this.username(),
      this.password()
    );

    this.router.navigate(['/boats']);
  }
}
