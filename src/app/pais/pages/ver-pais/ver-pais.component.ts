import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from "rxjs/operators";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  paises!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe({
    //     next: ({id}) =>{
    //       this.paisService.getPaisPorCodigo(id)
    //           .subscribe({
    //             next: (pais) => {
    //               console.log(pais)
    //             },
    //             error: (error) => {
    //               console.log(error)
    //             }
    //           })
    //     },
    //     error: (err) =>{

    //     }
    //   });

    //switchmap recibe un observable y contesta con otro 
    //tap efecto secundario
      this.activatedRoute.params
        .pipe(
          switchMap(({id}) => {
            return this.paisService.getPaisPorCodigo(id);
          }),
          tap(console.log)
        )
        .subscribe({
          next: (res) => {
            this.paises = res
          },
          error: (err) => {

          },
        })
  }

}
