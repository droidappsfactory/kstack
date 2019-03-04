import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../core/models/post.interface';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  tags: string[] = ['EMM', ' Fiori', 'RNAM', 'EDS'];
  comments: string[] = [
    'Can you provide me screenshot',
    'Can check your npm registry for eds repository link'
  ];
  showCommentBox = false;
  post: Post;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.postSelected.subscribe(data => {
      if (data) {
        this.post = data;
      } else {
        this.post =  {
          title: 'How to setup and use EDS angular components in my project?',
          description: `We are devloping new web app for Info Service in Angular.
          We need help in integrating existing EDS Angular library in our project.Please help.`,
          attachments: ['string[];'],
          tags: ['string[];'],
          createdby: 'string;',
          email: 'string;',
          createdOn: new Date(),
          answers: 2,
          favorite: false
        };
      }

    });
  }

  addComment(value) {
    if (value) {
      this.comments.push(value);
    }
  }
}
