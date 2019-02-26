import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeticionesService{

  public url: string;

  constructor(
    private _http: HttpClient
  ){
    this.url = "https://jsonplaceholder.typicode.com/posts";
  }

  getPrueba() {
    return 'hola mundo desde el servicio';
  }

  getArticulos(){
    return this._http.get(this.url);
                    
  }

}