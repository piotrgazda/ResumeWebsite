import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StyleGanPageComponent } from "./style-gan-page/style-gan-page.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
const routes: Routes = [
  { path: "stylegan", component: StyleGanPageComponent },
  { path: "", component: MainpageComponent },
  { path: "**", component: MainpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
