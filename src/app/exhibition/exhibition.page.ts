import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Exhibition } from './exhibition.model';
import { ExhibitionService } from './exhibition.service';

@Component({
  selector: 'app-exhibition-page',
  templateUrl: './exhibition.page.html',
  styleUrls: ['./exhibition.page.scss'],
})
export class ExhibitionPage {
  public exhibitions$: Observable<Exhibition[]>;
  public selectedExhibition?: Exhibition;

  constructor(private readonly _exhibitionService: ExhibitionService) {
    this.exhibitions$ = this._exhibitionService.getExhibitions();
  }

  public selectExhibition(exhibition: Exhibition): void {
    this.selectedExhibition = exhibition;
  }
}
