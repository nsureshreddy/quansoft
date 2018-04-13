import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './/app-routing.module';

import { AlwaysAuthGuard } from './authguard';
import { ProposalService } from './proposal.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule 
  ],
  providers: [
    AlwaysAuthGuard,
    ProposalService
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
