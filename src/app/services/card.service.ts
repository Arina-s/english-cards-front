import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Card } from "../interfaces/card";

@Injectable({providedIn: 'root'})
export class CardService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCars(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiServerUrl}/cards`);
  }
}