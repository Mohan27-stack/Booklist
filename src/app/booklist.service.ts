import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  private dataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public selectedBook$: Observable<string> = this.dataSubject.asObservable();
  constructor(private http: HttpClient) { }

   getbooklist(searchbook:any) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${searchbook.flag}`).pipe(catchError(this.handleError));
  }


  // Setter to update the value
  setSelectedBook(bookTitle: string): void {
    this.dataSubject.next(bookTitle); // ✅ Setting the value
  }

  // Optional: Getter to retrieve current value
  getSelectedBook(): string {
    return this.dataSubject.getValue();
  }

  private handleError(error: HttpErrorResponse) {
    // Client-side error or network issue
    if (error.error instanceof ErrorEvent) {
      console.error('Client/network error:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }

    // Custom error message
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }


}
