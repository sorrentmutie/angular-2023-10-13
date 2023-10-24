import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserPageComponent } from './randomusers/components/random-user-page/random-user-page.component';
import { ReqResPageComponent } from './reqres/components/req-res-page/req-res-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

const routes: Routes = [
  { path: "randomusers", component: RandomUserPageComponent  },
  { path: 'reqres', component: ReqResPageComponent },
  { path: 'products', component: ProductsPageComponent},
  { path: "products/:id", component: ProductDetailsComponent},
  { path: "welcome", component: WelcomeComponent},
  { path: '' , redirectTo: "welcome" ,  pathMatch: "full"}, 
  { path: '**',  component: NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
