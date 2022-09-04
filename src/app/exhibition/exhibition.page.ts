import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith, Subject, takeUntil } from 'rxjs';
import { Exhibition } from './exhibition.model';
import { ExhibitionService } from './exhibition.service';

@Component({
  selector: 'app-exhibition-page',
  templateUrl: './exhibition.page.html',
  styleUrls: ['./exhibition.page.scss'],
})
export class ExhibitionPage implements OnDestroy {
  public filteredExhibitions$: Observable<Exhibition[]>;
  public selectedExhibition?: Exhibition;
  public filterControl: FormControl<string>;
  public _exhibitions: Exhibition[];
  private readonly destroy$: Subject<void>;

  constructor(private readonly _exhibitionService: ExhibitionService) {
    this._exhibitions = [];
    this.filterControl = new FormControl();
    this.destroy$ = new Subject();
    this._exhibitionService
      .getExhibitions()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (exhibitions) => {
          this._exhibitions = exhibitions;
        },
      });
    this.filteredExhibitions$ = this.filterControl.valueChanges.pipe(
      startWith(''),
      map((filterValue) => {
        if (!filterValue) return this._exhibitions;

        const filteredExhibitions = this._exhibitions.filter((e) =>
          e.title
            .trim()
            .toLowerCase()
            .includes(filterValue.trim().toLowerCase())
        );

        return filteredExhibitions;
      })
    );
  }

  public selectExhibition(exhibition: Exhibition): void {
    this.selectedExhibition = exhibition;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
