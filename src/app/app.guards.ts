import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { MdDialogRef, MdDialog } from '@angular/material';

import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

@Injectable()
export class CanDeactivateContactsEditorGuard implements CanActivate<ContactsEditorComponent> {
    dialogRef: MdDialogRef<CanDeactivateContactsEditorGuard>
    constructor(public dialog: MdDialog) {}
    canActivate(component: ContactsEditorComponent) {

    }
}