import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGaurd } from './services/auth.guard';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  { path:'', component: DashboardComponent, canActivate: [AuthGaurd]},
  { path: 'login', component: LoginComponent},
  { path:'categories', component: CategoriesComponent , canActivate:[AuthGaurd]   },
  
  //   
  { path:'posts', component: AllPostComponent,  canActivate:[AuthGaurd]},
  { path:'posts/new', component: NewPostComponent, canActivate:[AuthGaurd]  },
  { path:'subscribers', component: SubscribersComponent, canActivate:[AuthGaurd] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
