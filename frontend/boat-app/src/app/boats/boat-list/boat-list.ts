import { Component, inject, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-boat-list',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './boat-list.html',
  styleUrl: './boat-list.scss'
})
export class BoatList implements OnInit {

  private boatService = inject(BoatControllerService);

  page?: PageBoatResponse;

  ngOnInit(): void {

    console.log('BoatList ngOnInit');

    this.boatService.findAll(
      {
        page: 0,
        size: 10
      },
      'body',
      false,
      {
        transferCache: false
      }
    ).subscribe(result => {
      this.page = result;
      console.log('result');
      console.log(result);
    });
  }
}
