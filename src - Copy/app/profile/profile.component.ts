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

  users: User[];
//info: String;
//errorInfo: String;
  constructor(private userService: UserService, private route: Router) { }

  updateProfile() {
    console.log('profile updated');
    this.userService.profile().subscribe(data =>{
      this.users=data; 
    console.log(this.users);
  //  this.info=data;
  },
  error => {
    //this.info = undefined;
    //this.errorInfo = error.error;
  } );
  }
  onSubmit() {
    console.log('submitted');
  }

  ngOnInit(): void {
  }

}
