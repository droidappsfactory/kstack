import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { Post } from 'src/app/core/models/post.interface';
import { concat, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit, OnDestroy {
  tags: string[] = [];
  postSubscription: Subscription;
  postForm: FormGroup;
  submitPost: Post;
  postsList: Post[];

  constructor(private _fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.postSubscription = this.dataService.posts.subscribe(data => {
      this.postsList = data;
    });
    this.postForm = this._fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [[], [Validators.required]]
    });
  }

  addTag(value) {
    if (value) {
      this.tags.push(value);
    }
  }

  removeTag(value) {
    this.tags.splice(this.tags.indexOf(value), 1);
  }

  onSubmit() {
    this.postForm.value.tags = this.tags;

    this.submitPost = this.postForm.value;

    this.postsList.push(this.submitPost);
    console.log(this.postsList);
    this.dataService.posts.next(this.postsList);
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }
}
