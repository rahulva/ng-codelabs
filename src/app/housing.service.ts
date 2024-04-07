import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, flatMap, from, map, mergeMap, of, switchMap, take, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = "http://localhost:3000/locations"
  housingLocationList: HousingLocation[] = [];

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    // return this.http.get<HousingLocation[]>(this.url).subscribe({
    //   next: val => this.housingLocationList = val,
    //   error: error => console.log(error),
    //   complete: () => console.log('complete!')
    // });
    return this.http.get<HousingLocation[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<HousingLocation | undefined> {
    return this.getAllHousingLocations()
      .pipe(map(values => values.find(location => location.id === id)));
    // .subscribe
    //   .pipe(mergeMap(v => from(v)))
    //   .pipe(filter(location => location.id === id));
    // return this.housingLocationList.find(location => location.id === id);

  }

  submitApplication(firstName: String, lastName: String, email: String) {
    console.log(firstName, lastName, email);
  }

}