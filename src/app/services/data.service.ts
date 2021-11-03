import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  games: number= 0;
  attemps: number= 0;
  media: number= 0;

  calculateMedia(){

    this.media= (this.games/this.attemps);
  }

  constructor() {}
}
