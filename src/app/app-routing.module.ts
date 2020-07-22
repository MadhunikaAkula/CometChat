import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { CometchatEmbeddedComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/cometchat-embedded/cometchat-embedded.component';
import { GroupListComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/group-list/group-list.component';
import { ConversationsListComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/conversations-list/conversations-list.component';
import { StatusIndicatorComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/status-indicator/status-indicator.component';
import { AppNavigationComponentComponent } from './app-navigation-component/app-navigation-component.component';
// import { AppConversationScreenComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/cometchat-conversation-list-screen/app-conversation-screen.component';
// import { DemoUserViewComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/demo-user-view/demo-user-view.component';
// import { AppContactScreenComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/cometchat-user-list-screen/app-contact-screen.component';
import { ContactListComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/user-list/contact-list.component';
import { GroupScreenComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/group-screen/group-screen.component';
import { ConversationsScreenComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/conversations-screen/conversations-screen.component';
import { ContactScreenComponent } from 'src/libs/cometchat-angular-ui-kit/src/lib/contact-screen/contact-screen.component';
import{LoginComponent}from'../app/login/login.component';
import { AuthGuard } from './Auth.guard';

const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path: 'embeded-app',
        component: CometchatEmbeddedComponent,
        canActivate: [AuthGuard]
    }, 
    {
        path: 'contact-list',
        component: ContactListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'group-list',
        component: GroupListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'conversations-list',
        component: ConversationsListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'status-indicator',
        component: StatusIndicatorComponent,
        canActivate: [AuthGuard]
    }, 
    {
        path: 'menu',
        component: AppNavigationComponentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'contact-screen',
        component: ContactScreenComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'group-screen',
        component: GroupScreenComponent,
        canActivate: [AuthGuard]
    }
    ,
    {
        path: 'conversation-screen',
        component: ConversationsScreenComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'components',
        component: DemoComponent,
        canActivate: [AuthGuard]
    }
    , {
        path: 'status-indicator',
        component: StatusIndicatorComponent,
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'user-view',
    //     component: DemoUserViewComponent
    // }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
