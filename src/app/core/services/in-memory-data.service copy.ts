import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
    debugger;
    throw new Error('Method not implemented.');
  }

  post(reqInfo: any) {
    debugger;
    if (reqInfo.collectionName === 'heroes') {
      const hero = {
        id: reqInfo.collection.length + 1,
        name: reqInfo.req.body.name
      };
      reqInfo.collection.push(hero);
      return reqInfo.utils.createResponse$(() => ({
        body: hero,
        status: 201
      }));
    }
    return undefined;
  }
}