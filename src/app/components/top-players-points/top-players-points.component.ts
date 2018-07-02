import { Component, OnInit, AfterContentInit} from '@angular/core';

import { CommonServices } from '../../services/common-services.service';

@Component({
  selector: 'app-maptop',
  templateUrl: './top-players-points.component.html',
  styleUrls: ['./top-players-points.component.scss']
})
export class TopPlayersPointsComponent implements OnInit, AfterContentInit {

  public queryInfo = [];
  public ranks = ['Gaby', 'Master', 'Epic'];

  constructor(private cs: CommonServices) { }

  ngOnInit() {

  }
  ngAfterContentInit() {
    this.cs.getTopPlayersByPoints().subscribe((data: Object) => {
      
      for(let entry = 0; entry <= 24; entry++) {
        this.queryInfo.push(data[entry]);
      }
    })
  }
  
}