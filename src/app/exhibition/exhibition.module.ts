import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExhibitionPage } from './exhibition.page';

@NgModule({
  declarations: [ExhibitionPage],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  exports: [ExhibitionPage],
})
export class ExhibitionModule {}
