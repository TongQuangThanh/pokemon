/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
