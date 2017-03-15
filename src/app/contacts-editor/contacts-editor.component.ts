import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  // cant use ?. with ngModel operator so we need to initialize it and typecast it to contact
  // to avoid typescript error for missing contact properties
  // or use ngIf with loading template 
  contact: Contact;
  warnOnClosing = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    this.route.data
        .map(data => data['contact'])
        .subscribe(contact => this.contact = contact);
  }
  save(contact: Contact){
    this.warnOnClosing = false;
    this.contactsService.updateContact(contact)
      .subscribe(() => this.cancel());
  }
  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
