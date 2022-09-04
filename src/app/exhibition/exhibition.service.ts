import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Exhibition, ExhibitionDTO } from './exhibition.model';

@Injectable({ providedIn: 'root' })
export class ExhibitionService {
  private readonly _apiUrl: string;

  constructor(private readonly _httpClient: HttpClient) {
    this._apiUrl = environment.apiUrl;
  }

  public getExhibitions(): Observable<Exhibition[]> {
    return this._httpClient
      .get<ExhibitionDTO[]>(`${this._apiUrl}/exhibitions`)
      .pipe(
        map((exhibitionsDtos) => exhibitionsDtos.map((e) => new Exhibition(e)))
      );
  }
}
