import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.paises = res;
      },
      error: (err) => {
        console.info(err)
        this.hayError = true;
      }
    });
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: Crear sugerencias
  }

}
