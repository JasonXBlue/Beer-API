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
  displayedColumns: string[] = ['id', 'name', 'tagline', 'abv', 'image_url'];

  dataSource = new MatTableDataSource<IBeer>();
  count = 71;
  searchName = '';

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private beerDataService: BeerDataService) {}

  async ngOnInit() {
    const data = await this.beerDataService.getBeers();
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
  async newBeer() {
    this.dataSource = new MatTableDataSource(
      await this.beerDataService.getCount(this.count++)
    );
  }
  search() {
    console.log(this.searchName);
  }
}
