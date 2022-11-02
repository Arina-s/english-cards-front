import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

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

  public deleteCardGroup(cardGroupName: string): void {
    this.http.delete<string[]>(`${this.apiServerUrl}/cardGroups/${cardGroupName}`).subscribe();
  }

  public createCardGroup(name: string): void {
    this.http.post<string>(`${this.apiServerUrl}/cardGroups/?groupName=${name}`, null).subscribe();
  }
  
}