import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root',
})
export class BeerDataService {
  constructor(private apiService: ApiService) {}

  searchName: string;

  async getBeers(): Promise<IBeer[]> {
    return await this.apiService.get();
  }

  async getCount(count: number): Promise<IBeer[]> {
    return await this.apiService.getBeersCount('?per_page=' + count);
  }

  // async getSearch(): Promise<IBeer[]> {
  //   return await this.apiService.Search('?beer_name=punk');
  // }
}
