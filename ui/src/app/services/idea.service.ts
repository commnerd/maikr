import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idea } from '../models/idea';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  baseUrl: string = `${environment.api}/ideas`;
  
  constructor(
    private client: HttpClient
  ) { }


  list(): Observable<Array<Idea>> {
    return this.client.get<Array<Idea>>(`${this.baseUrl}`);
    // return of([new Idea('test a'), new Idea('test b')]);
  }
}
