import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData, User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  isLoggedIn(): boolean {
    return this.cookieService.check('jwt'); // Check for the presence of the JWT cookie
  }

  logout(): void {
    this.cookieService.delete('jwt'); // Delete the cookie on logout
  }

  registerUser(postData: RegisterPostData) {
    const convertedData = {
      userName: postData.fullName, // mapping fullName to userName
      userPassword: postData.password, // mapping password to userPassword
      userEmail: postData.email, // mapping email to userEmail
    };
    console.log(convertedData);
    return this.http.post(`${this.baseUrl}/users/register`, convertedData);
  }

  getUserDetails(credentials: {
    userEmail: string;
    userPassword: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/login`, credentials, {
      withCredentials: true,
    });
  }
}
