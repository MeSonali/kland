import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/user/login/login.component';
import { ProfileComponent } from '../app/user/profile/profile.component';
import { LayoutComponent } from '../app/user/layout/layout.component';
import { AuthGuard } from './guards/auth.guard'; 

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'user',
    component:  LayoutComponent,
    children: [{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }], 
  },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
