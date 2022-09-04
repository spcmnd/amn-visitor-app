import { Component, Input } from '@angular/core';
import { Exhibition } from '../exhibition.model';

@Component({
  selector: 'app-exhibition-details',
  templateUrl: './exhibition-details.component.html',
  styleUrls: ['./exhibition-details.component.scss'],
})
export class ExhibitionDetailsComponent {
  @Input() public exhibition!: Exhibition;

  public handleGoogleMapsClick(): void {
    const { address1, city, zipcode } = this.exhibition.venue;

    if (!address1 || !city || !zipcode) return;

    window.open(
      `https://www.google.ch/maps/search/${address1},${city},${zipcode}`,
      '_blank'
    );
  }
}
