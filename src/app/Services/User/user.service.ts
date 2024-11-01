import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../State/state';
interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}
interface UserDetail {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
@Injectable({
  providedIn: 'root'
})


export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.apiUrl}?page=${page}`);
  }
  getUserDetail(id: number): Observable<{ data: UserDetail }> {
    return this.http.get<{ data: UserDetail }>(`${this.apiUrl}/${id}`);
  }
}
