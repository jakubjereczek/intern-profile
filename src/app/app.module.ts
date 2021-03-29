import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './pages/main/main.component';
import { AboutMeComponent } from './pages/main/about-me/about-me.component';
import { ProjectsComponent } from './pages/main/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    AboutMeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
