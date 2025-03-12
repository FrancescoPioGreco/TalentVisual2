import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerFetchApiService {

  constructor(private httpClient: HttpClient) { }

  urlToFetch:string = 'http//localhost:3000/';
}

export interface Player {
  id: number
  name: string
  surname: string
  nation: string
  age: number
  team: string
  role: string
} 
