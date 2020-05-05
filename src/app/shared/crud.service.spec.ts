import { Injectable } from '@angular/core';
import { Contact } from '../shared/contact';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  contactsRef: AngularFireList<any>;    
  contactRef: AngularFireObject<any>;   

  constructor(private db: AngularFireDatabase) { }
  
  AddContact(contact: Contact) {
    this.contactsRef.push({
      firstName: contact.nom,
      lastName: contact.prenom,
      email: contact.email,
      mobileNumber: contact.telephone
    })
  }

  
  GetContact(id: string) {
    this.contactRef = this.db.object('contacts-list/' + id);
    return this.contactRef;
  }
  

  // Update Student Object
  UpdateContact(student: Contact) {
    this.contactRef.update({
      nom: contact.nom
      prenom: contact.prenom,
      email: contact.email,
      telephone: contact.mobileNumber
    })

    DeleteContact(id: string) { 
      this.contactRef = this.db.object('students-list/'+id);
      this.contactRef.remove(); 
    }
  }  