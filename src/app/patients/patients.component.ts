import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { medecin_patient } from '../model/medecin_patient';
import { Patient } from '../model/Patient';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  
  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  id: any;
  listpatient_medecin!: medecin_patient[];
  listdetails!: Patient[];
  hide_table=false;
  p: number = 1;


  constructor(private route: ActivatedRoute,private router: Router,private tokenStorageService: TokenStorageService,private tokenStorage: TokenStorageService,private userService: UserService) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.id = user.id;
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
 
      this.returnPatientMedecin(this.id);
  }
  }

  returnPatientMedecin(id: any) {
   this.hide_table = false;
    this.userService.getPatientsMedecin(id).subscribe(
      (data: any) => {
        this.listpatient_medecin=data;
       console.log(this.listpatient_medecin)
            },
      );
  }

  returnPatientDetails(id: any) {
   this.hide_table = true;
    this.userService.getPatient(id).subscribe(
      (data: any) => {
        this.listdetails=data;
       console.log(this.listdetails)
            },
      );
  }
  returnFalse() {
    this.hide_table = false;
   
   }

   Addreporting(form: NgForm) {
    const value = form.value;
    
    this.userService.Addreporting(value.iddetails,value.datedetails,value.Message).subscribe(
      (data) => {
        console.log("done");
        alert("Report added.")
      },
      errors => {
        console.log(errors);
      },
    )
    ;
  }

}
