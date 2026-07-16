import {ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BoatService } from '../boat.service';
import { Boat } from '../boat.model';

@Component({
  selector: 'app-boat-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './boat-form.html',
  styleUrl: './boat-form.scss'
})
export class BoatForm implements OnInit {
  private cdr = inject(ChangeDetectorRef);
  private boatService = inject(BoatService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  boat: Partial<Boat> = {
    name: '',
    description: ''
  };

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      return;
    }

    this.boatService
      .findById(+id)
      .subscribe(boat => {

        this.boat = boat;

        this.cdr.detectChanges();

      });

  }

  save(): void {

    if (this.boat.id) {

      this.boatService
        .update(
          this.boat.id,
          this.boat as Boat
        )
        .subscribe(() => {

          this.router.navigate(['/boats']);

        });

      return;

    }

    this.boatService
      .create(this.boat as Boat)
      .subscribe(() => {

        this.router.navigate(['/boats']);

      });

  }

  cancel(): void {

    this.router.navigate(['/boats']);

  }

}
