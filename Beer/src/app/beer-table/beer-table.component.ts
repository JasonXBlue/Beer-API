import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../services/api.service';
import { IBeer } from '../interfaces/ibeer';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.css'],
})
export class BeerTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'tagline'];

  dataSource = new MatTableDataSource<IBeer>();

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    // this.dataSource = new MatTableDataSource(await this.apiService.get());
    // this.dataSource.sort = this.sort;
    this.dataSource = new MatTableDataSource(await this.apiService.get());
    this.dataSource.sort = this.sort;
  }
  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
