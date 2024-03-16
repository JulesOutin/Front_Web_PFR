import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Open5Service {

  constructor(private http: HttpClient) { }
  private apiRoutes: any = {
    races: "https://api.open5e.com/v1/races/?format=json",
    classes: "https://api.open5e.com/v1/classes/?format=json",
  }

  public getAllClasses(): Observable<Object> {
    return this.http.get(this.apiRoutes.classes);
  }

  public getAllRaces(): Observable<Object> {
    return this.http.get(this.apiRoutes.races);
  }
}
