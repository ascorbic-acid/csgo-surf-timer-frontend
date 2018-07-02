import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 

@Injectable({
  providedIn: 'root'
})
export class CommonServices {

  constructor(private http: HttpClient) { }
  // get stats/players servers service
  getStats(){
    const api = "http://localhost:3000/timer-api/status";
    return this.http.get(api, httpOptions);
  }
  // dashboard most word records card service
  getMostWordRecords() {
    const api = "http://localhost:3000/timer-api/dashboard/most-word-records";
    return this.http.get(api, httpOptions);
  }
  // dashboard most points card service
  getMostPoints() {
    const api = "http://localhost:3000/timer-api/dashboard/most-points";
    return this.http.get(api, httpOptions);
  }
  getTopMaps() {
    const api = "http://localhost:3000/timer-api/dashboard/top-maps";
    return this.http.get(api, httpOptions);
  }
  getNewMaps() {
    const api = "http://localhost:3000/timer-api/dashboard/new-maps";
    return this.http.get(api, httpOptions);
  }

  // infocards query area
  queryTopWorldRecordInfoCard() {
    const api = 'http://localhost:3000/timer-api/dashboard/infocards?cardtype=topworldrecord';
    return this.http.get(api, httpOptions);

  }
  queryTopPointsInfoCard() {
    const api = 'http://localhost:3000/timer-api/dashboard/infocards?cardtype=toppoints';
    return this.http.get(api, httpOptions);

  }
  queryMapTopInfoCard() {
    const api = 'http://localhost:3000/timer-api/dashboard/infocards?cardtype=maptop';
    return this.http.get(api, httpOptions);

  }
  // maptop page
  getViewRecords(map, style, track){
    const api = `http://localhost:3000/timer-api/maptop?map=${map}&style=${style}&track=${track}`;
    return this.http.get(api, httpOptions);
  }

  // Top Players By points
  getTopPlayersByPoints(){
    const api = `http://localhost:3000/timer-api/maptop/topby?by=points`;
    return this.http.get(api, httpOptions);
  }
}
