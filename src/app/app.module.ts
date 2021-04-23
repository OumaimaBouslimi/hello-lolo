import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MohamedComponent } from './mohamed/mohamed.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MohamedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
