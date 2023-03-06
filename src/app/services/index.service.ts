import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';


@Injectable({
  providedIn: 'root'
})
const baseUrl = `${environment.apiUrl}/users`;

export class IndexService {

  constructor() { }
}
