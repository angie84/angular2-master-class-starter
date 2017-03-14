import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/takeUntil';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Array<Contact>>; 
  terms$ = new Subject<string>();

  constructor(
    private contactsService: ContactsService
  ) {}
  
  ngOnInit() {
    // exercise 4
    this.contacts = this.contactsService.search(this.terms$);

    // exercise 3
    // this.contacts = this.terms$
    //     .debounceTime(400)                                          // Oberservable<String>
    //     .distinctUntilChanged()                                     // Oberservable<String>
    //     .switchMap( term => this.contactsService.rawSearch(term) )  // Oberservable<Array<Contact>>
    //     .merge(this.contactsService.getContacts().takeUntil(this.terms$))

    // exercise 2
    // this.contacts = this.contactsService.getContacts();
    // this.terms$
    //   .debounceTime(400)
    //   .distinctUntilChanged()
    //   .subscribe(term => this.search(term));
  }

  trackByContactId(index, contact) {
    return contact.id;
  }
}
