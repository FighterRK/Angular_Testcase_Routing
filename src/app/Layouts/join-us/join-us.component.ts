import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent {

  constructor(public route : Router){}

  routeBack(){
    this.route.navigate(['/about'])
    
  }

}
