import { Component, OnInit } from '@angular/core';
import { allusers } from '../model/allusers';
import { roles } from '../model/roles';
import { user_roles } from '../model/user_roles';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class ALLUsersComponent implements OnInit {

  Listuser!: allusers[];
  ListRoles!: user_roles[];
  roles: any[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  email: any;
  id: any;
  p: number = 1;


  constructor(private tokenStorageService: TokenStorageService,private tokenStorage: TokenStorageService,private userService: UserService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();



    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.id = user.id;
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.email=user.email;
      this.username = user.username;
      this.ALLUser();
  }
}
  ALLUser() {
    
    this.userService.ALLUsers().subscribe(
      (data) => {
       
        this.Listuser=data;
        console.log(this.Listuser);
        console.log(this.Listuser[0].roles[0].name);
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }

 


  findUsersRoles(id: any) {
    
    this.userService.findUsersRoles(id).subscribe(
      (data) => {
        this.ListRoles=data;
        
        console.log(this.ListRoles);
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    )
    ;

  }
}