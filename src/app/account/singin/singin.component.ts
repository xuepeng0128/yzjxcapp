import { Component, OnInit } from '@angular/core';
import {User} from '../../entity/User';
import {UserService} from '../../shared/service/user.service';
import {Router} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserStorageService} from '../../shared/service/baseapi/user-storage.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  user: User = new User();
  validate$: Observable<boolean> = EMPTY;
  constructor(private usersvr: UserService, private router: Router, private userstorage: UserStorageService ) { }

  ngOnInit() {
  }
  onLogin = () => {
    this.validate$ = this.usersvr.validateLogin(this.user).pipe(
      map(user => {
        if (user) {
          this.user = user;
          this.userstorage.Set(user);
          this.router.navigate(['/']);
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
