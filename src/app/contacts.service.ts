import { Injectable,Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
 
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';
import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class ContactsService {
  private contacts: Contact [] = CONTACT_DATA;

  constructor(
    private http: Http,
    @Inject(API_ENDPOINT) private apiUrl
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

  search(terms: Observable<string>, debounceMs = 400) {
    return Observable.merge(
      this.getContacts(),
      terms
        .debounceTime(debounceMs)
        .distinctUntilChanged()
        .switchMap(term => this.rawSearch(term) )
    );
  }
  rawSearch(term: String) {
    return this.http.get(`${this.apiUrl}/search?text=${term}`)
      .map(res => res.json().items);
  }
}
