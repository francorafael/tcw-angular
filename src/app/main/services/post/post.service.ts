import { Injectable } from '@angular/core';
import { TwcApiService } from '../../../core/services/tcw-api/twc-api.service';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  private twcApiService: TwcApiService

  public constructor(twcApiService: TwcApiService) {
    this.twcApiService = twcApiService;
  }

  public get(): Observable<Object>
  {
    return this.twcApiService.get('posts/getAllWithCode');
  }

}
