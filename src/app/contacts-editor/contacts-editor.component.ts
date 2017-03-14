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
  contact: Contact = <Contact>{ address: {}};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id)
      .subscribe(contact => this.contact = contact);
  }
  save(contact: Contact){
    this.contactsService.updateContact(contact)
      .subscribe(() => this.cancel());
      //.subscribe(contact => this.cancel());
  }
  cancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
