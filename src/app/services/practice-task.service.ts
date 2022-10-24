import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Card } from "../interfaces/card";
import { PracticeMode } from "../interfaces/practice-mode";

@Injectable({providedIn: 'root'})
export class PracticeTaskService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public createTask(practiceMode: PracticeMode): void {
    this.http.post<PracticeMode>(`${this.apiServerUrl}/practices`, practiceMode).subscribe();
  }

  public getCardsForPracticeTask(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiServerUrl}/practices/cards`);
  }

}