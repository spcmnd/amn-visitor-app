import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExhibitionDetailsComponentModule } from './exhibition-details/exhibition-details.component.module';
import { ExhibitionPage } from './exhibition.page';

@NgModule({
  declarations: [ExhibitionPage],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatListModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ExhibitionDetailsComponentModule,
  ],
  exports: [ExhibitionPage],
})
export class ExhibitionModule {}
