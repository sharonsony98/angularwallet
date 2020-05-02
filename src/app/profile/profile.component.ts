import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private route: Router) { }

  updateProfile() {
    console.log('profile updated');
  }
  onSubmit() {
    console.log('submitted');
  }

  ngOnInit(): void {
  }

}
