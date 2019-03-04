import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '@eds/angular';
import { Post } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.less']
})
export class PostItemComponent implements OnInit {


  @Input() post: Post;

  constructor() { }

  ngOnInit() {

  }

}
