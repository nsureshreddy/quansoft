import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MastersModule } from './masters/masters.module';

import { AlwaysAuthGuard } from './authguard';
import { ProposalService } from './proposal.service';
import { UserModule } from './user/user.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    AppRoutingModule,
    DashboardModule,
    MastersModule,
    UserModule
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
