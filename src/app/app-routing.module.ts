import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { ProfileComponent } from './profile/profile.component';
import { PassBookComponent } from './pass-book/pass-book.component';

const routes: Routes = [
  {path: 'check-balance', component: CheckBalanceComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'pass-book', component: PassBookComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
