import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { delay } from "rxjs/operators";

import { CHARACTERS } from './mock-data';

@Injectable()
export class AdventureTimeService {
  constructor() { }
  getCharacters(): Observable<any[]> {
    return of(CHARACTERS).pipe(
      delay(500)
    );
  }
  getColumns(): string[] {
    return ["name", "age", "species", "occupation"]
  };
}