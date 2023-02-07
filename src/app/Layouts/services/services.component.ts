import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  public serviceName : string = '';
  public serviceId  = '';

  constructor(public activeRouter : ActivatedRoute){

   

    activeRouter.params.subscribe((param : any)=>{

      this.serviceName = param.name;
      this.serviceId = param.id;
      

      console.log(param);
      
    })

  }

}
