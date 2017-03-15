import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { ContactsResolver } from './shared/contacts.resolver';

export const APP_ROUTES: Routes = [
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { 
    path: '', 
    component: ContactsDashboardComponent ,
    children: [
      { path: '', redirectTo: 'contacts/0', pathMatch: 'full' },
      { path: 'contacts/new', component: ContactsCreatorComponent},
      { path: 'contacts/:id', component: ContactsDetailViewComponent },
      { 
        path: 'contacts/:id/edit', 
        component: ContactsEditorComponent, 
        resolve: {
          contact: ContactsResolver
        },
        canDeactivate: ['ConfirmNavigationGuard'] 
      }
    ]
  
  },
  { path: '**', redirectTo: '/' }
]