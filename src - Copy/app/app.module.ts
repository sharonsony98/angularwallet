import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PassBookComponent } from './pass-book/pass-book.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchbyPipe } from './searchby.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PassBookComponent,
    CheckBalanceComponent,
    TopbarComponent,
    SearchbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
