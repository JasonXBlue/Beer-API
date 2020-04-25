import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBeer } from '../interfaces/ibeer';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BEER_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private httpClient: HttpClient) {}

  async get() {
    return await this.httpClient.get<IBeer[]>(this.BEER_URL).toPromise();
  }
  async getBeersCount(path) {
    return await this.httpClient.get<IBeer[]>(this.BEER_URL + path).toPromise();
  }

  //   async getQueryString(queryString: string) {
  //     // 'https://api.punkapi.com/v2/beers/queryString'
  //     return this.httpClient
  //       .get<IBeer[]>('${this.BEER_URL}/?${queryString}')
  //       .toPromise();
  //   }
}
