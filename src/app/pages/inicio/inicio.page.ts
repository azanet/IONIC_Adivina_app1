import { Component, OnInit } from '@angular/core';
import { StatusPage } from '../status/status.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  numberFinal: number;

  numberUser: number;

  numSecret: number;

  hintNumber: string;

  constructor() {
    this.numSecret = this.numAleatorio(0, 100);
    //   debugger;
    this.numberFinal = -1;
  }


  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }



  ngOnInit() {
  }



  onClick() {

    if (this.numberUser != null) {
      this.numberFinal = this.numberUser;

      if (this.numberFinal < this.numSecret) {
        this.hintNumber = 'es MENOR';

      } else if (this.numberFinal > this.numSecret) {
        this.hintNumber = 'es MAYOR';

      }

    } else {
      this.numberFinal = -1;
    }
    console.log(this.numSecret);
  }

  reTry() {
    this.hintNumber = undefined;
    this.numSecret = this.numAleatorio(0, 100);
    this.numberUser = null;
    this.numberFinal = -1;

  }

  }
