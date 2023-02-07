import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Layouts/about/about.component';
import { CareersComponent } from './Layouts/careers/careers.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { JoinUsComponent } from './Layouts/join-us/join-us.component';

import { ServicesComponent } from './Layouts/services/services.component';

const routes: Routes = [
  // {path:'',component:HeaderComponent},


  {path:'join',component:JoinUsComponent},
  {path:'services/:name/:id',component:ServicesComponent},
  {path:'career',component:CareersComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
