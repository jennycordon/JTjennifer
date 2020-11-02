import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './services/security.service';
//angular material
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
//<!--0907-17-23013-->
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'security-app';

  //angular
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private security: SecurityService,
    private router: Router,
    private breakpointObserver: BreakpointObserver//angular
    ){

  }
  logedIn(){
    return this.security.logedIn ();
  }

  onLogout(){
    this.security.logout();
    this.router.navigate(['login']);
  }
}






