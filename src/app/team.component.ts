import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'teamlist',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
  teamList: Team[];
  title = '球队列表';
  constructor(
    private teamService: TeamService,
    private router: Router
  ) {}
  getTeamList(): void {
    this.teamService.getTeamList().then(teamList => this.teamList = teamList);
  }
  ngOnInit(): void {
    this.getTeamList();
  }
}
