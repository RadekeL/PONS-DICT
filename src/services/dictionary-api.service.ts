import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DictionaryApiService {
  private path = `https://api.pons.com/v1/dictionaries?language=es"`;
  constructor(private readonly httpClient: HttpClient) {}

  getDict() {
    return this.httpClient.get<any>(`${this.path}`);
  }
}
