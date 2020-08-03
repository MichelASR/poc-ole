import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HeaderVO } from '../../vo/header.vo';
import { UserContextService } from '../user-context.service';

export class BasicService {

  private baseResource: string;
  private baseHttp: HttpClient;
  private baseUserContext: UserContextService;
  private baseHeader: HeaderVO;

  constructor(resource: string, http: HttpClient, userContext: UserContextService, header: HeaderVO) {
    this.baseResource = resource;
    this.baseHttp = http;
    this.baseUserContext = userContext;
    this.baseHeader = header;
  }

  getUserContext(): UserContextService {
    return this.baseUserContext;
  }

  getUrlContext(path?: string, baseUrl?: string): string {
    const urlContext = (baseUrl ? baseUrl : this.baseHeader.getBaseUrl()) + '/' + this.baseResource + (path ? path : '');
    return urlContext;
  }

  getHttp(): HttpClient {
    return this.baseHttp;
  }

  getHttpHeaderOptionToken(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'client_id': this.baseHeader.getClientId(),
        'access_token': `${this.baseUserContext.getToken()} `,
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

  getHttpHeaderOptionBearer(bearer?: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${bearer}`
      })
    };

    return httpOptions;
  }

  getHttpHeaderOptionMultipart(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.baseHeader.getBearer()}`,
        'access_token': `${this.baseUserContext.getToken()} `,
        'client_id': this.baseHeader.getClientId()
      })
    };
    return httpOptions;
  }

  getResource(): string {
    return this.baseResource;
  }

  getHttpHeaderOptions(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${this.baseHeader.getBearer()}`
      })
    };
    return { headers: httpOptions.headers };
  }
}
