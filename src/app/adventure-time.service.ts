import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AdventureTimeService {

  constructor(private http: HttpClient) { }

  getLines(): Observable<any> {
    return this.http.get('http://localhost:8080/lines');
  }

  getColumns(): string[] {
    return ['left', 'center', 'rigth'];
  }
}
