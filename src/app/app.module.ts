import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { AboutMeComponent } from './pages/main/about-me/about-me.component';
import { ProjectsComponent } from './pages/main/projects/projects.component';
import { WhyMeComponent } from './pages/main/why-me/why-me.component';
import { ProjectComponent } from './pages/project/project.component';

import localePl from "@angular/common/locales/pl";
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    AboutMeComponent,
    ProjectsComponent,
    WhyMeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pl-PL" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
