import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { delay } from "rxjs/operators";

import { CHARACTERS } from './mock-data';

@Injectable()
export class AdventureTimeService {
  constructor(private http: HttpClient) { }
  getCharacters(): Observable<Object> {
    
    return this.http.get("http://localhost:8080/hello").pipe(
      delay(500)
    );
    
    /*return of(CHARACTERS).pipe(
      delay(500)
    );*/
  }
  getColumns(): string[] {
    return ["name", "age", "species", "occupation"]
  };
}