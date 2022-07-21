import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Cat} from "../components/cats/cat.model";

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) {
  }

  getCats() {
    return this.http.get<Cat[]>("https://api.thecatapi.com/v1/breeds", {
      headers: {'x-api-key': '7d8658a0-adf9-4cc0-abe5-da99bcd120e8'}
    })
  }
}
