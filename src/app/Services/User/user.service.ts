import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ResponseData, ResponseDataForUser } from '../../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cache = new Map<string, any>();

  public baseURl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<ResponseData> {
    const url = this.baseURl + `?page=${page}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http
      .get(url)
      .pipe(tap((data: any) => this.cache.set(url, data)));
  }
  getUserDetail(id: number): Observable<ResponseDataForUser> {
    const url = this.baseURl + `/${id}`;
    if (this.cache.has(url)) {
      return of(this.cache.get(url));
    }
    return this.http
      .get(url)
      .pipe(tap((data: any) => this.cache.set(url, data)));
  }
}
