import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../core/services/rickandmorty.service';
import { first } from "rxjs/operators";
import { ResposeRickandmorty } from '../shared/models/respose.rickandmorty.model';
@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.scss']
})
export class RickandmortyComponent implements OnInit {

  rickandmorty: any;

  respose?: ResposeRickandmorty;

  filterData = '';

  pageActual: number = 1;

  constructor(
    private rickandmortyService: RickandmortyService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData(){
    this.rickandmortyService.getAll()
    .pipe(first()).subscribe(data => {
      //Si la data contiene resultados (iniciali)
      if(data !== null){
        this.respose = data;
      }
      // console.log(data);
    }, error => {
      console.error(error);
    });
  }

  // personajes = [
  //   {nombre:'Rick Sanchez', id:1},
  //   {nombre:'Morty Smith', id:2},
  //   {nombre:'Summer Smith', id:3},
  //   {nombre:'Beth Smith', id:4}
  // ]

}
