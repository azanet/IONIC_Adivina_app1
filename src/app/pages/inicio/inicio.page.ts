import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

  numberFinal: number= -2;

  numberUser: number;

  numSecret: number= this.numAleatorio(0, 100);

  hintNumber: string;

  constructor(private dataService: DataService) {

  }



  numAleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a, 10));
  }



  ngOnInit() {
  }



  onClick() {
    //Para evitar trampas
    if(this.numberFinal=== -2){
       this.dataService.games=this.dataService.games+1; //SUMANDO partida JUGADA al "services/data".
    }

    if (this.numberUser != null) {
      this.numberFinal = this.numberUser;

      if (this.numberFinal < this.numSecret) {
        this.hintNumber = 'es MENOR';
        this.dataService.attemps=this.dataService.attemps+1; //SUMANDO error Cometido al "services/data".

      } else if (this.numberFinal > this.numSecret) {
        this.hintNumber = 'es MAYOR';
        this.dataService.attemps=this.dataService.attemps+1; //SUMANDO error Cometido al "services/data".

      } else if (this.numberFinal === this.numSecret) {
        this.dataService.attemps=this.dataService.attemps+1; //SUMANDO error Cometido al "services/data".
        this.dataService.calculateMedia(); //Calculando 'media de errores' Cometido al "services/data".

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
    this.numberFinal = -2;

  }


  }
