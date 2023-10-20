import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsPageComponent } from './products/components/components-page/components-page.component';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './shared/components/menu/menu.component';
import { CustomersDataComponent } from './shared/customers-data/customers-data.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MyReactiveFormComponent } from './shared/my-reactive-form/my-reactive-form.component';
import { FirstComponent } from './shared/first/first.component';
import { SecondComponent } from './shared/second/second.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { FirstAComponent } from './shared/first-a/first-a.component';
import { FirstBComponent } from './shared/first-b/first-b.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsPageComponent,
    MenuComponent,
    CustomersDataComponent,
    FooterComponent,
    MyReactiveFormComponent,
    FirstComponent,
    SecondComponent,
    NotFoundComponent,
    WelcomeComponent,
    FirstAComponent,
    FirstBComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


