import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { InsuranceForm } from '../models/insuranceForm';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpInsuranceFormService {
  private url = 'http://localhost:3000/forms';

  constructor(private http: HttpClient) {}

  postInsuranceForm(insuranceForm: InsuranceForm): Observable<InsuranceForm> {
    return this.http.post<InsuranceForm>(this.url, insuranceForm).pipe(tap(console.log));
  }


}
