import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeHolder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for(housingLocation of housingLocationList$ | async; track housingLocationList$) {
        <app-housing-location [housingLocation]="housingLocation" />
      }
      
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList$: Observable<HousingLocation[]>;
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList$ = this.housingService.getAllHousingLocations();
  }
}
