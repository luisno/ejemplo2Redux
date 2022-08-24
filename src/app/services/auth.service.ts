import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario = 'luisno2929@gmail.com';
  private password = '12345';
  private readonly token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  constructor() { }

  public login({email, password}: any): boolean {
    if (email === this.usuario && password == this.password) {
      localStorage.setItem('auth-token', this.token);
      return true;
    } else {
      return false;
    }
  }

  public isAuth(): boolean {
    if (localStorage.getItem('auth-token')) {
      return true;
    } else {
      return false;
    }
  }
}
