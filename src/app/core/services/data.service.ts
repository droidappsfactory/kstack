import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public posts = new BehaviorSubject<Post[]>([
    {
      title: 'How to setup and use EDS angular components in my project?',
      description: `We are devloping new web app for Info Service in Angular.
      We need help in integrating existing EDS Angular library in our project.
      Tried to install EDS Angular using npm install @eds/angular.
      Please check the error in screenshot attached.Please help.`,
      attachments: ['string[];'],
      tags: ['string[];'],
      createdby: 'string;',
      email: 'string;',
      createdOn: new Date(),
      answers: 2,
      favorite: true
    },
    {
      title: 'Title Two',
      description: 'string;',
      attachments: ['string[];'],
      tags: ['string[];'],
      createdby: 'string;',
      email: 'string;',
      createdOn: new Date(),
      answers: 2,
      favorite: false
    },
    {
      title: 'Title',
      description: 'string;',
      attachments: ['string[];'],
      tags: ['string[];'],
      createdby: 'string;',
      email: 'string;',
      createdOn: new Date(),
      answers: 2,
      favorite: false
    },
    {
      title: 'Title Two',
      description: 'string;',
      attachments: ['string[];'],
      tags: ['string[];'],
      createdby: 'string;',
      email: 'string;',
      createdOn: new Date(),
      answers: 2,
      favorite: false
    },
    {
      title: 'Title',
      description: 'string;',
      attachments: ['string[];'],
      tags: ['string[];'],
      createdby: 'string;',
      email: 'string;',
      createdOn: new Date(),
      answers: 2,
      favorite: true
    },
    {
      title: 'Title Two',
      description: 'string;',
      attachments: ['string[];'],
      tags: ['string[];'],
      createdby: 'string;',
      email: 'string;',
      createdOn: new Date(),
      answers: 2,
      favorite: false
    }
  ]);

  postSelected = new BehaviorSubject<Post>(null);

  constructor() {}
}
