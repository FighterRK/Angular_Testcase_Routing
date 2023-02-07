import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public router :Router){}


  goToServices(valu : string,id:number){
    this.router.navigate(['/services',valu,id])

  }

}
