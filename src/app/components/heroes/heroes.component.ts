import { Component, OnInit } from '@angular/core';
// service
import { Heroeservice, Heroe } from '../../services/heroes.service';
// rutas
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  constructor(
   // Habilitamos este servicio en este componente
   private heroesService: Heroeservice,
   private router: Router
  ) {
    console.log('constructor');
   }

  heroes: Heroe[] = [];

  ngOnInit(): void {
    // es bastante utilizado cuando la pagina ya esta renderizada
    console.log('ngOnInit');
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe(idx: number): void{
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }




}
