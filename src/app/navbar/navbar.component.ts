import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  user_role = 'ROLE_USER';

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  role(){
    if(this.roles.includes('ROLE_MODERATOR')) 
    {
      return true
    }
    else
    {
      return false;
    }
    
  }

  roleUser(){
    if(this.roles.includes('ROLE_USER')) 
    {
      return true
    }
    else
    {
      return false;
    }
    
  }
  roleadmin(){
    if(this.roles.includes('ROLE_ADMIN')) 
    {
      return true
    }
    else
    {
      return false;
    }
    
  }
  rolemedcin(){
    if(this.roles.includes('ROLE_MODERATOR')) 
    {
      return true
    }
    else
    {
      return false;
    }
    
  }


}
