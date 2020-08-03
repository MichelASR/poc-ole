import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeaderVO } from '../vo/header.vo';
import { BaseService } from './base/base.service';
import { UserContextService } from './user-context.service';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService extends BaseService {
  constructor(
    private _http: HttpClient,
    private _userContextService: UserContextService,
    private _header: HeaderVO
  ) {
    super('', _http, _userContextService, _header);
  }
}
