import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Book} from "../interfaces/Book.interface";
import {Books} from "../interfaces/Books.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private httpClient: HttpClient) {
  }

  triggerSearch(q: string, startIndex: number, maxResults: number): Observable<Books> | any {
    if (q?.length) {
      return this.httpClient.get<Books>(this.url, {
        params: {
          q,
          startIndex,
          maxResults
        }
      });
    } else {
      return of([]);
    }
  }
}
