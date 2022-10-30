import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CardGroup } from "../interfaces/card-group";

@Injectable({providedIn: 'root'})
export class CardGroupService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCardGroups(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/cardGroups/cardGroupNames`);
  }

  public getCardSubgroupNames(cardGroupName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiServerUrl}/cardGroups/cardSubgroupNames/${cardGroupName}`);
  }
  
}