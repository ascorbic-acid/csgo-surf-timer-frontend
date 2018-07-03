import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class CommonServices {

  static BASE_API = "http://localhost:3000/";

  constructor(private http: HttpClient) { }
  // get stats/players servers service
  getStats(){
    const api = `${CommonServices.BASE_API}timer-api/status`;
    return this.http.get(api, httpOptions);
  }
  // dashboard most word records card service
  getMostWordRecords() {
    const api = `${CommonServices.BASE_API}timer-api/dashboard/most-word-records`;
    return this.http.get(api, httpOptions);
  }
  // dashboard most points card service
  getMostPoints() {
    const api = `${CommonServices.BASE_API}timer-api/dashboard/most-points`;
    return this.http.get(api, httpOptions);
  }
  getTopMaps() {
    const api = `${CommonServices.BASE_API}timer-api/dashboard/top-maps`;
    return this.http.get(api, httpOptions);
  }
  getNewMaps() {
    const api = `${CommonServices.BASE_API}timer-api/dashboard/new-maps`;
    return this.http.get(api, httpOptions);
  }

  // infocards query area
  queryInfoCards() {
    const api = `${CommonServices.BASE_API}timer-api/dashboard/infocards`;
    return this.http.get(api, httpOptions);

  }
  // maptop page
  getViewRecords(map, style, track){
    const api = `${CommonServices.BASE_API}timer-api/maptop?map=${map}&style=${style}&track=${track}`;
    return this.http.get(api, httpOptions);
  }

  // Top Players By points
  getTopPlayersByPoints(){
    const api = `${CommonServices.BASE_API}timer-api/maptop/topby?by=points`;
    return this.http.get(api, httpOptions);
  }
}
