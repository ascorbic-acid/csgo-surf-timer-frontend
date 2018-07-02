import { Component, OnInit} from '@angular/core';

import { CommonServices } from '../../services/common-services.service';

@Component({
  selector: 'app-maptop',
  templateUrl: './maptop.component.html',
  styleUrls: ['./maptop.component.scss']
})
export class MapTopComponent implements OnInit {

  public queryInfo = [];

  constructor(private cs: CommonServices) { }

  ngOnInit() {

  }
  queryRecords(map, style, track) {
    this.cs.getViewRecords(map, style, track).subscribe((data: Array<any>) => {
      this.queryInfo = data;
      console.log(this.queryInfo)

    })
  }

}

// interface QueryInfo {
//   rank: String, name: String,
//   auth: String,
//   time: Float32Array, style: Number,
//   track: Number,
//   date: Date
// }