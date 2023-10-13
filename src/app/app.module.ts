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

@NgModule({
  declarations: [
    AppComponent,
    ComponentsPageComponent,
    MenuComponent,
    CustomersDataComponent,
    FooterComponent,
    MyReactiveFormComponent
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


