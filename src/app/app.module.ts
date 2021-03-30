import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { AboutMeComponent } from './pages/main/about-me/about-me.component';
import { ProjectsComponent } from './pages/main/projects/projects.component';
import { WhyMeComponent } from './pages/main/why-me/why-me.component';
import { ProjectComponent } from './pages/project/project.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
