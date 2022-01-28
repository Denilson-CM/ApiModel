import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResposeRickandmorty } from '../../shared/models/respose.rickandmorty.model';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http: HttpClient) { }

  _url = 'character'; 
  pag = '?page=2';

  getAll():Observable<ResposeRickandmorty>{

    let url = `${this._url}/`

    return this.http.get<ResposeRickandmorty>(url)
  }
}
