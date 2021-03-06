import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthenticationService } from '../authentication.service';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderBasicService } from '../base/header-basic.service';

@Injectable()
export class RequestBasicService {
  protected baseUrl: string = 'http://localhost:3000/api';

  constructor(protected http: Http,
              protected authenticationService: AuthenticationService,
              protected router: Router
  ){}

  getHeaders() {
    return this.authenticationService.getHeaders()
  }

  handleError(error: any) {
    this.authenticationService.handleError(error)
  }
}
