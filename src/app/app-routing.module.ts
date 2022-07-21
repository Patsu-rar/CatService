import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "cats", loadChildren: () => import('./components/cats/cats.module').then(m => m.CatsModule)}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
