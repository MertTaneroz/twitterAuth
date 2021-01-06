import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  authUrl:string = 'http://localhost:1337/auth/local';
  userlist:any = [];
  user:any = null;
  jwt:string = null;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  register(username: string, email: string, password: string) {
    this.http.post(`${this.authUrl}/register`, {
      username,
      email,
      password
    })
    .subscribe(data => this.setUser(data))
  }

  login(identifier:string, password:string) {
    this.http.post(this.authUrl, {
      identifier,
      password
    })
      .subscribe(data => this.setUser(data))
  }

  setUser(data: any) {
    this.user = data.user;
    this.jwt = data.jwt;
    window.localStorage.setItem('jwt', data.jwt)

    this.router.navigateByUrl('/')
  }

  logout() {
    this.user = null;
    this.jwt = null;
    window.localStorage.removeItem('jwt')
    this.router.navigateByUrl('/login');
  }
}