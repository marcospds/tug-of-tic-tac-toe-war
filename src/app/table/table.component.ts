import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../adventure-time.service';
import { Observable } from 'rxjs';
import { map, take } from "rxjs/operators";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table: Observable<any>;
  lines: string[][] = [[null, null, null], [null, null, null], [null, null, null]];
  columns: string[];
  dataRefresher: any;
  xWins: number = 0;
  oWins: number = 0;
  
  constructor(private atService: AdventureTimeService) { }

  ngOnInit(): void {
    this.columns = this.atService.getColumns();
    this.refreshData();
  }

  refreshData() {

    this.dataRefresher =
      setInterval(() => {

        this.table = this.atService.getLines();

        this.table.pipe(take(1)).subscribe(value => {

          console.log(value); 

          this.lines = value.lines;
          this.xWins = value.XVictorys;
          this.oWins = value.OVictory;

          //this.win = this.win ? false : true;
          //this.winner = value[0][0];

        });

      }, 500);
  }
}
