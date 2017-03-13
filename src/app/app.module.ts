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

@NgModule({
  declarations: [ContactsAppComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent],
  providers: [
    ContactsService,
    {provide:'apiUrl', useValue:'http://localhost:4201/api'}
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
