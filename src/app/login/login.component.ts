import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../model/user';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';




function showNotification(){
  
    const notification = new Notification("Hey doctor!", {
      body: "FIRST OF ALL? Click here to check oxygen tanks!",
      icon: "../../assets/images/application_logo-01.png",
      
    });
  
    notification.onclick = function () {
      window.open("http://localhost:4200/oxygen");      
    };
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})







export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    
   this.router.navigate([''], { relativeTo: this.route });
   if(this.isLoggedIn == true && this.roles[0].includes('ROLE_MODERATOR')){
    showNotification();
  }
  }


  






}
