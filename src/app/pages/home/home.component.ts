import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.interface';
import * as fromAuth from '../../store/auth/auth.reducer';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  tags: string[] = ['EMM', ' Fiori', 'RNAM', 'EDS'];

  posts: Observable<Post[]>;

  loggedInUser$: Observable<string>;

  constructor(private dataService: DataService,private store: Store<AppState>) { }

  ngOnInit() {
    this.loggedInUser$ = this.store.pipe(select(fromAuth.getLoggedInUser));
    this.posts = this.dataService.posts.asObservable();
  }

  onPostClicked(item: Post) {
    this.dataService.postSelected.next(item);
  }

}
