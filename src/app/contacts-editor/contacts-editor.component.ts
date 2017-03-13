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
  contact: Contact;

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
      .subscribe(contact => this.cancel(contact));
  }
  cancel(contact: Contact) {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
