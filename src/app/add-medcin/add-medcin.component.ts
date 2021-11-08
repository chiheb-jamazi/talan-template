import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allusers } from '../model/allusers';
import { AuthService } from '../_services/auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-add-medcin',
  templateUrl: './add-medcin.component.html',
  styleUrls: ['./add-medcin.component.css']
})
export class AddMedcinComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  Listuser!: allusers[];



  constructor(private authService: AuthService,private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  

  ngOnInit() {
    this.ALLUser();
  }

  onSubmit() {
    this.authService.addMedcin(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
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

  reloadPage() {
    window.location.reload();
   }

  DeleteDoctor(id: any) {
    
    this.userService.deleteDoctor(id).subscribe(
      (data) => {
        console.log(data);
 
        this.reloadPage();
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }

  

}
