import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ExhibitionDetailsComponent } from './exhibition-details.component';

@NgModule({
  declarations: [ExhibitionDetailsComponent],
  imports: [CommonModule, MatIconModule, MatChipsModule, MatButtonModule],
  exports: [ExhibitionDetailsComponent],
})
export class ExhibitionDetailsComponentModule {}

