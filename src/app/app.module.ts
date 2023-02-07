import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { AboutComponent } from './Layouts/about/about.component';

import { CareersComponent } from './Layouts/careers/careers.component';
import { ServicesComponent } from './Layouts/services/services.component';
import { MainComponent } from './Layouts/main/main.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { JoinUsComponent } from './Layouts/join-us/join-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
  
    CareersComponent,
    ServicesComponent,
    MainComponent,
    FooterComponent,
    JoinUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
