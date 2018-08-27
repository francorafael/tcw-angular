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

  public show(id:number): Observable<Object>
  {
    return this.twcApiService.show('posts/showWithCode', id);
  }

  public post(data : any): Observable<Object>
  {
    return this.twcApiService.post('posts/store', data);
  }

  public update(data : any, id:number): Observable<Object>
  {
    return this.twcApiService.put('posts/update', id, data);
  }

  public delete(id:number): Observable<Object>
  {
    return this.twcApiService.delete('posts/destroy', id);
  }

}
