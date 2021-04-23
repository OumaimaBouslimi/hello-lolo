import { MohamedComponent } from './mohamed/mohamed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Component } from '@angular/core';
import { Routes } from "@angular/router";

export const appRoutes : Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"mohamed",component:MohamedComponent}

]
