import { Component, OnInit } from '@angular/core';
import { BeerDataService } from '../services/beer-data.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  title = 'Beer';
  message: string;

  constructor(private beerDataService: BeerDataService) {}

  async ngOnInit() {
    this.message = JSON.stringify(await this.beerDataService.getBeersCount(10));
  }
}
