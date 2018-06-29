import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CommonServices } from '../../services/common-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterContentInit {
 
  public most_word_records = [];
  public most_points = [];
  public top_maps = [];
  public new_maps = [];

  constructor(private cs: CommonServices) {
  
  }

  ngOnInit() {

  }
  ngAfterContentInit() {
    // init most word records card
    this.cs.getMostWordRecords().subscribe((data:Array<any>) => {
      for(let i in data) {
        this.most_word_records.push(data[i]);
      }
    }, (err) => {
      throw err;
    });
  //init most points card
    this.cs.getMostPoints().subscribe((data:Array<any>) => {
      for(let i in data) {
        this.most_points.push(data[i]);
      }
    }, (err) => {
      throw err;
    });
    // init top maps card
    this.cs.getTopMaps().subscribe((data:Array<any>) => {
      for(let i in data) {
        this.top_maps.push(data[i]);
      }
    }, (err) => {
      throw err;
    });
    // init new maps card
    this.cs.getNewMaps().subscribe((data:Array<any>) => {
      for(let i in data) {
        this.new_maps.push(data[i]);
      }
      console.log(this.new_maps);
    }, (err) => {
      throw err;
    });
  }
  

}

