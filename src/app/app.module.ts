import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MyFirstComponent } from './shared/components/my-first/my-first.component';
import { MySecondComponent } from './shared/components/my-second/my-second.component';
import { ProductsPageComponent } from './products/components/products-page/products-page.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { RandomUserPageComponent } from './randomusers/components/random-user-page/random-user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MyFirstComponent,
    MySecondComponent,
    ProductsPageComponent,
    ProductPipe,
    ProductsListComponent,
    RandomUserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
