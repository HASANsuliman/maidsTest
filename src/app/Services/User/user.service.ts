import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cache = new Map<string, any>();


  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    const url = `https://reqres.in/api/users?page=${page}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(tap((data) => this.cache.set(url, data)));
  }
  getUserDetail(id: number): Observable<any> {
    const url = `https://reqres.in/api/users/${id}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http.get(url).pipe(tap((data) => this.cache.set(url, data)));
  }
}
