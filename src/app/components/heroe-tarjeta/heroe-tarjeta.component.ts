import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {
  // recibo heroe desde afuera
  @Input() heroe: any = {};
  @Input() index: number;
  // emitiendo evento para el comopnenente padre
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router,
  ) {
      // dispara un evento personalizado
      this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(): void {
    // console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit( this.index ); TODO: se comenta emisión
  }
}
