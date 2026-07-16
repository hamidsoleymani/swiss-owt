import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { BoatService } from '../boat.service';
import { Boat } from '../boat.model';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-boat-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boat-list.html',
  styleUrl: './boat-list.scss'
})
export class BoatList implements OnInit {

  private boatService = inject(BoatService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);

  boats: Boat[] = [];

  page = 0;
  size = 5;

  totalPages = 0;
  totalElements = 0;

  ngOnInit(): void {
    this.loadBoats();
  }

  loadBoats(): void {

    this.boatService.findAll(this.page, this.size)
      .subscribe(page => {

        this.boats = page.content;

        this.totalPages = page.totalPages;
        this.totalElements = page.totalElements;

        this.cdr.detectChanges();

      });

  }

  previousPage(): void {

    if (this.page === 0) {
      return;
    }

    this.page--;

    this.loadBoats();

  }

  nextPage(): void {

    if (this.page >= this.totalPages - 1) {
      return;
    }

    this.page++;

    this.loadBoats();

  }

  createBoat(): void {

    this.router.navigate([
      '/boats/new'
    ]);

  }

  editBoat(id: number): void {

    this.router.navigate([
      '/boats',
      id,
      'edit'
    ]);

  }

  deleteBoat(id: number): void {

    if (!confirm('Delete this boat?')) {
      return;
    }

    this.boatService.delete(id)
      .subscribe(() => {

        this.loadBoats();

      });

  }

  logout(): void {

    this.authService.logout();

    this.router.navigate(['/login']);

  }

}
