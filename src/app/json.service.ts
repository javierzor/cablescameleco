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

    rol(data: any)
  {
  var url = 'http://cables.cameleco.com/api/rol';
  return this.http.post(url,data,
  {headers:new HttpHeaders({"Content-Type":'application/json'})});
  }

  prueba(){
  
    var url = 'https://cables.cameleco.com/api/prueba';
    return this.http.get(url);
    
    
  }

}