import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
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
