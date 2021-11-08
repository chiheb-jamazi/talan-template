import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { allusers } from '../model/allusers';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-allpatients',
  templateUrl: './allpatients.component.html',
  styleUrls: ['./allpatients.component.css']
})
export class AllpatientsComponent implements OnInit {


  Listuser!: allusers[];
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  email: any;
  id: any;
  user_patient!: allusers;
  registerForm!: FormGroup; 
  search = true;
  name: any;
  patient_name: any;
  errors: any;
  p: any;
  
  
  

  constructor(private route: ActivatedRoute,private router: Router,private tokenStorageService: TokenStorageService,private tokenStorage: TokenStorageService,private userService: UserService) { }
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
      this.patient_name = this.name;
      this.ALLUser();
  }
}
  ALLUser() {
    
    this.userService.ALLUsers().subscribe(
      (data) => {
        this.Listuser=data;
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    );
  }

  followPatient(patient_id: any, medecin_id:any){
    console.log(patient_id, medecin_id);
    this.userService.followPatient(patient_id, medecin_id).subscribe(
      (data) => {
        this.router.navigate(['/patientmedecin'], { relativeTo: this.route });
      },
      errors => {
        alert("You already followed this patient!")
        console.log(errors);
   
      },
    );
  }



  findPatientByUsername(form: NgForm) {
    this.search = false;
    const value = form.value;
    
    this.userService.findPatientByUsername(value.titre).subscribe(
      (data) => {
      
          this.user_patient = data;
          console.log(this.user_patient.username);
        
      },
      errors => {
        console.log(errors);
   
      },
    )
    ;
  }

  backtoallpatient() {
    this.search = true;
  }





}
