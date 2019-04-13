import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarnonlineComponent } from './earnonline/earnonline.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostbookComponent } from './dashboard/postbook/postbook.component';
import { HistoryComponent } from './dashboard/history/history.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { UserdetailsComponent } from './dashboard/userdetails/userdetails.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    // {
    //     path: '', redirectTo: '/login', pathMatch: 'full'
    // },
    {
        path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard]
    },
    {
        path: 'earn-online', component: EarnonlineComponent
    },
    {
        path: '', component: HomepageComponent
    },
    {
        path: 'book/postbook', component: DashboardComponent,
        children: [{ path:'', component: PostbookComponent}]
    },
    {
        path: 'book/history', component: DashboardComponent,
        children: [{ path:'', component: HistoryComponent}]
    },
    {
        path: 'user/details', component: DashboardComponent,
        children: [{ path:'', component: UserdetailsComponent}]
    },
    {
        path: 'book/singleview/:book_id', component: SinglebookComponent
    }

];