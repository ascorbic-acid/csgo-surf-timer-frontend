import { Component, OnInit, AfterContentInit } from '@angular/core';
import { CommonServices } from '../../services/common-services.service';

@Component({
  selector: 'stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit, AfterContentInit {

  public infoCards: infoCards = {
    topworldrecord: {
      total_players: null,
      total_records: null
    },
    toppoints: {
      total_points: null,
      avg_points: null
    },
    maptop: { 
      total_maps: null,
      total_bonusmaps: null
    },
    servers_players_stats: {
      players_online: null,
      servers_online: null
    }
  }
  constructor(private cs: CommonServices) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // topworldrecords 
    this.cs.queryTopWorldRecordInfoCard().subscribe((data: Object) => {
      this.infoCards.topworldrecord.total_players = StatsCardComponent.kFormatter(data['total_players']);
      this.infoCards.topworldrecord.total_records = StatsCardComponent.kFormatter(data['total_records']);
    })
    // toppoints  
    this.cs.queryTopPointsInfoCard().subscribe((data: Object) => {
      this.infoCards.toppoints.total_points = StatsCardComponent.kFormatter(data['total_points']),
        this.infoCards.toppoints.avg_points = StatsCardComponent.kFormatter(data['avg_points'])
    })
    // maptop  
    this.cs.queryMapTopInfoCard().subscribe((data: Object) => {
      this.infoCards.maptop.total_maps = StatsCardComponent.kFormatter(data['total_points']),
        this.infoCards.maptop.total_bonusmaps = StatsCardComponent.kFormatter(data['avg_points'])
    })
    this.cs.getStats().subscribe((data: Array<any>) => {
      let total_online_players = 0;

      for(let server of data) {
        total_online_players += server['serverOnlinePlayers'];
      }
      console.log(total_online_players)
      this.infoCards.servers_players_stats.players_online = total_online_players;
      this.infoCards.servers_players_stats.servers_online = data['length'];

    }, (err) => { throw err});
  }
  
  static kFormatter(num) {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num
  }

}
interface infoCards {
  topworldrecord: {
    total_players: String,
    total_records: String
  },
  toppoints: {
    total_points: String,
    avg_points: String
  },
  maptop: { 
    total_maps: String,
    total_bonusmaps: String
  },
  servers_players_stats: {
    players_online: Number,
    servers_online: number
  }
}