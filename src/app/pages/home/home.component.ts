import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  tags: string[] = ['EMM', ' Fiori', 'RNAM', 'EDS'];

  posts: Observable<Post[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.posts = this.dataService.posts.asObservable();
  }

  onPostClicked(item: Post) {
    this.dataService.postSelected.next(item);
  }

}
