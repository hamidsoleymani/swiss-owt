import {ChangeDetectorRef, Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import {BoatService} from '../boats/boat.service';

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
  private boatService = inject(BoatService);
  username = '';
  password = '';
  errorMessage = '';

  private cdr = inject(ChangeDetectorRef);
  login(): void {

    if (!this.username || !this.password) {
      return;
    }

    this.authService.login(
      this.username,
      this.password
    );

    this.boatService.findAll(0, 1)
      .subscribe({
        next: () => {
          this.router.navigate(['/boats']);
        },
        error: () => {

          this.authService.logout();

          this.errorMessage = 'Invalid username or password';

          this.cdr.detectChanges();

        }

      });
  }

}
