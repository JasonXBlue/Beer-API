import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root',
})
export class BeerDataService {
  constructor(private apiService: ApiService) {}

  async getBeers(): Promise<IBeer[]> {
    return await this.apiService.get();
  }
}
