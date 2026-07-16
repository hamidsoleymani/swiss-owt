import {Component, OnInit, inject, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';

import { BoatService } from '../boat.service';
import { Boat } from '../boat.model';

@Component({
  selector: 'app-boat-list',
  standalone: true,
  imports: [],
  templateUrl: './boat-list.html',
  styleUrl: './boat-list.scss'
})
export class BoatList implements OnInit {

  private boatService = inject(BoatService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  boats: Boat[] = [];

  ngOnInit(): void {
    this.loadBoats();
  }

  loadBoats(): void {

    this.boatService.findAll().subscribe(page => {

      this.boats = page.content;

      this.cdr.detectChanges();

    });

  }

  createBoat(): void {
    this.router.navigate(['/boats/new']);
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

}
