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
    'Is it related to certification creation'
  ];
  showCommentBox = false;
  post: Post;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.postSelected.subscribe(data => {
      this.post = data;
    });
  }

  addComment(value) {
    this.comments.push(value);
  }
}
