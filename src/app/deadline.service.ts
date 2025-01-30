// src/app/services/deadline.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

interface DeadlineResponse {
  secondsLeft: number;
}

@Injectable({
  providedIn: 'root',
})
export class DeadlineService {
  private readonly deadlineUrl = 'assets/api.json';

  constructor(private http: HttpClient) {}

  getDeadline(): Observable<number> {
    return this.http.get<DeadlineResponse>(this.deadlineUrl).pipe(
      catchError(() => of({ secondsLeft: 9000 })),
      switchMap(response => of(response.secondsLeft))
    );
  }
}
