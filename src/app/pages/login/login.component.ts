import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromAuth from '../../store/auth/auth.reducer';
import { AppState } from 'src/app/store/app.state';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as authActions from '../../store/auth/auth.action';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private store: Store<AppState>, private _fb: FormBuilder) {}

  ngOnInit() {
    // this.store.select(fromAuth.getLoggedIn).subscribe(data => {
    //   console.log('select ', data);
    // })
    this.loginform = this._fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSignInClicked() {
    console.log('sign in clicked', this.loginform.value);
    //{username: this.loginform.value.username, loggedIn: true}
    this.store.dispatch(new authActions.LogginUser({username: this.loginform.value.username, loggedIn: true}));
  }
}
