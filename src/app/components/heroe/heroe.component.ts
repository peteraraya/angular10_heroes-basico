import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
// servicio
import { Heroeservice } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {
  
  heroe:any = {};

  

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: Heroeservice
  ) {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.heroe = this.heroesService.getHeroe(params.id);

      console.log(this.heroe);
   
    });
  }

 

}
