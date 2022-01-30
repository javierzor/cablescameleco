import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { RequestOptions } from '@angular/http';
//importo las respuestas nativas del servidor
// import { Http, Response } from '@angular/http'
import { map } from 'rxjs/operators'; //importo calculos reactivos de .map y .filter

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(
    
    private http: HttpClient
    
    ) { }

    variasfunciones(data: any)
  {
  var url = 'https://cables.cameleco.com/laravel/public/api/variasfunciones';
  return this.http.post(url,data,
  {headers:new HttpHeaders({"Content-Type":'application/json'})});
  }

    rol(data: any)
  {
  var url = 'https://cables.cameleco.com/laravel/public/api/rol';
  return this.http.post(url,data,
  {headers:new HttpHeaders({"Content-Type":'application/json'})});
  }

  empiezalogin(data: any)
  {
  var url = 'https://cables.cameleco.com/laravel/public/api/empiezalogin';
  return this.http.post(url,data,
  {headers:new HttpHeaders({"Content-Type":'application/json'})});
  }

  empieza(data: any)
  {
  var url = 'https://cables.cameleco.com/laravel/public/api/empieza';
  return this.http.post(url,data,
  {headers:new HttpHeaders({"Content-Type":'application/json'})});
  }

  prueba(){
    var url = 'https://cables.cameleco.com/laravel/public/api/prueba';
    return this.http.get(url);
  }

}
