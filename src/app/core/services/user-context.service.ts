import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  url: any;
  constructor(
    private platformLocation: PlatformLocation
  ) {
    this.url = encodeURI(`${(this.platformLocation as any).location.origin}/home`);
  }

  setDados(dadosUsuario): void {
    sessionStorage.setItem('dados', JSON.stringify(dadosUsuario));
  }

  getDados(): any {
    return JSON.parse(sessionStorage.getItem('dados')) || null;
  }

  setToken(token): void {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token') || null;
  }

  setUsuarioID(id: string): void {
    sessionStorage.setItem('usuarioId', id);
  }

  getUsuarioId() {
    return sessionStorage.getItem('usuarioId') || null;
  }

  getTokenBearer(): string {
    // tslint:disable-next-line:max-line-length
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVuaWRhcyIsInBhc3N3b3JkIjoidW5pZGFzMjAxOCJ9LCJpYXQiOjE1NDM5MjYzMDB9.4xXJcamVoGlBXWCBFUUj--RmjMpThdjVX9qsBjC_2PU';
  }

  removeToken() {
    sessionStorage.clear();
  }

  logout(): void {

    if (this.getToken()) {
      setTimeout(() => {
        const appURL = this.url;
        //const loginAppURL = AppConfig.LOGIN_APP_URL;
        localStorage.clear();

        // window.location.href = `${loginAppURL}?source_system=${appURL}&system_code=${AppConfig.SYSTEM_CODE}`;
      }, 500);
    }
  }
}
