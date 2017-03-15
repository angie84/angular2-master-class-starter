import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap(params => this.contactsService.getContact(params.id))
      .subscribe(c => this.contact = c)
  }
  navigateToEditor() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  navigateToList() {
    this.router.navigate(['/']);
  }

}
