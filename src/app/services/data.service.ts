import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  games: number= 0;
  errors: number= 0;
  media: number= Math.floor((this.games/this.errors)*100);

  constructor() { }
}
