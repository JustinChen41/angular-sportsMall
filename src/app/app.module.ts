import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamComponent } from './team.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { TeamService } from './team.service';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
