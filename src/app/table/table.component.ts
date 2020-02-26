import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../adventure-time.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  lines: Observable<Object>;
  columns: string[];
  dataRefresher: any;

  constructor(private atService: AdventureTimeService) { }

  ngOnInit(): void {
    this.columns = this.atService.getColumns();
    this.refreshData();
  }

  refreshData(){
  
    this.dataRefresher = 
      setInterval(() => {
        this.lines = this.atService.getLines()
      }, 5000);  
  }
}
