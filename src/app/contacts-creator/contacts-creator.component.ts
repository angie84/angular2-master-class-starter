import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'trm-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {
  terms$ = new Subject<string>();
  
  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) { }

  ngOnInit() {}
  save(contact: Contact){
    this.contactsService.addContact(contact)
      .subscribe(() => this.router.navigate(['/']));
  }
}
