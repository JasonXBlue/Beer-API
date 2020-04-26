import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { IBeer } from '../interfaces/ibeer';
import { BeerDataService } from '../services/beer-data.service';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css'],
})
export class BeerTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'image_url',
    'name',
    'abv',
    'tagline',
    'food_pairing',
  ];

  dataSource = new MatTableDataSource<IBeer>();
  count = 71;
  SEARCH_URL = 'https://api.punkapi.com/v2/beers?beer_name=punk';

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private beerDataService: BeerDataService) {}

  async ngOnInit() {
    const data = await this.beerDataService.getBeers();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  // applyFilter(filter: string): void {
  //   this.dataSource.filter = filter.trim().toLowerCase();
  // }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  async newBeer() {
    this.dataSource = new MatTableDataSource(
      await this.beerDataService.getCount(this.count++)
    );
    this.dataSource.sort = this.sort;
  }
  // async searchBeers() {
  //   this.dataSource = new MatTableDataSource(
  //     await this.beerDataService.getSearch()
  //   );
  // }
}
