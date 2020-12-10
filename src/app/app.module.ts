import { StyleGanPageComponent } from "./style-gan-page/style-gan-page.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PresentationComponent } from "./presentation/presentation.component";
import { HobbysTableComponent } from "./hobbys-table/hobbys-table.component";
import { HobbyComponent } from "./hobby/hobby.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HobbyDescriptionComponent } from "./hobby-description/hobby-description.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { ImageSlideShowComponent } from "./image-slide-show/image-slide-show.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsTableComponent } from './projects-table/projects-table.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    HobbysTableComponent,
    HobbyComponent,
    FooterComponent,
    NavigationComponent,
    HobbyDescriptionComponent,
    StyleGanPageComponent,
    MainpageComponent,
    ImageSlideShowComponent,
    ProjectsTableComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
