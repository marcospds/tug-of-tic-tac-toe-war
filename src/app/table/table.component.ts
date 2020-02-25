import { Component, OnInit } from '@angular/core';
import { AdventureTimeService } from '../adventure-time.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];
    
  constructor(private atService: AdventureTimeService) { }

  ngOnInit(): void {
    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
  }

}
