import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {
  private contacts: Contact [] = CONTACT_DATA;

  constructor(
    private http: Http,
    @Inject('apiUrl') private apiUrl
  ) {}

  getContacts() {
    return this.http.get(`${this.apiUrl}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }
  getContact(id: string){
    return this.http.get(`${this.apiUrl}/contacts/${id}`)
      .map(res => res.json().item);
  }
  updateContact(contact: Contact) {
    return this.http.put(`${this.apiUrl}/contacts/${contact.id}`,contact)
      .map(res => res.json().item);
  }
}
