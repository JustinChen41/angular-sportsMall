import { Team } from './team';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {
  private teamListUrl = 'http://localhost:8080/team/getteamlist';

  constructor(private http: Http) {}

  getTeamList(): Promise<Team[]> {
    return this.http.get(this.teamListUrl)
      .toPromise()
      .then(response => response.json().teamList as Team[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
