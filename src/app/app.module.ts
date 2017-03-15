import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './contacts.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsService } from './contacts.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { APP_ROUTES } from '../app/app.routes';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab/tab.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { API_ENDPOINT } from './app.tokens';
import { ConfirmDeactivationDialogComponent } from './confirm-deactivation-dialog/confirm-deactivation-dialog.component';
import { ContactsResolver } from './shared/contacts.resolver';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { EmailAvailabilityValidatorDirective } from './email-availability-validator.directive';

export function confirmNavigationGuard(component) {
  return !component.warnOnClosing || window.confirm('Navigate away without saving?');
}

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent, TabComponent, TabsComponent, ContactsDashboardComponent, ConfirmDeactivationDialogComponent, ContactsCreatorComponent, EmailValidatorDirective, EmailAvailabilityValidatorDirective],
  providers: [
    ContactsService,
    ContactsResolver,
    {provide:API_ENDPOINT, useValue:'http://localhost:4201/api'},
    {provide: 'ConfirmNavigationGuard',useValue: confirmNavigationGuard}
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}
