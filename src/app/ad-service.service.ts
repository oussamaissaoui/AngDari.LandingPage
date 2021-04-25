import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {
  status: string[] = ['TUNIS', 'MANNOUBA', 'ARIANA'];

  constructor(private http: HttpClient) { }

  URL:any='http://localhost:8090/Achat';
 
  getSpring(){
  
      return this.http.get<any>('http://localhost:8090/Achat/All');
  }
  
  getSpringId(id:number){
      return this.http.get('http://localhost:8090/Achat/findByid/'+id);
  }
  getMostViewed(){

    return this.http.get<any>(this.URL+'/MostViewed');

  }
}
