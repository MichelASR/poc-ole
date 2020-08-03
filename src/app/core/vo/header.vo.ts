import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderVO {

  private baseUrl: string;
  private clientId: string;
  private bearer: string;

  setBaseUrl(baseUrl): void {
    this.baseUrl = baseUrl;
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }

  setClientId(clientId): void {
    this.clientId = clientId;
  }

  getClientId(): string {
    return this.clientId;
  }

  setBearer(bearer): void {
    this.bearer = bearer;
  }

  getBearer(): string {
    return this.bearer;
  }
}
