import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddexpensecomponentComponent } from './addexpensecomponent/addexpensecomponent.component';
import { CalendercomponentComponent } from './calendercomponent/calendercomponent.component';
import { DisplayexpensecomponentComponent } from './displayexpensecomponent/displayexpensecomponent.component';
import { ExpensesummarycomponentComponent } from './expensesummarycomponent/expensesummarycomponent.component';
import { LogocomponentComponent } from './logocomponent/logocomponent.component';
import { NavigationbarcomponentComponent } from './navigationbarcomponent/navigationbarcomponent.component';
import { OverviewcomponentComponent } from './overviewcomponent/overviewcomponent.component';
import { ExpensecomponentComponent } from './expensecomponent/expensecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddexpensecomponentComponent,
    CalendercomponentComponent,
    DisplayexpensecomponentComponent,
    ExpensesummarycomponentComponent,
    LogocomponentComponent,
    NavigationbarcomponentComponent,
    OverviewcomponentComponent,
    ExpensecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
