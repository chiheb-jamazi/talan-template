import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient';
import { reporting } from '../model/reporting';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.css']
})
export class DetailsPatientComponent implements OnInit {

  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  email: any;
  id: any;
  listdetails!: Patient[];
  listreporting!: reporting[];
  listreporting_top3: reporting[] = [];
  p1: number = 1;
  p2: number = 1;


  constructor(private tokenStorageService: TokenStorageService,private userService: UserService) { }


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
      this.returnPatientDetails(this.id);
      this.ALLReporting(this.id);
      this.findLatestReporting(this.id);
  }
  }

  returnPatientDetails(id: any) {
   
    this.userService.getPatient(id).subscribe(
      (data: any) => {
        this.listdetails=data;
       console.log(this.listdetails)
            },
      );
  }
  ALLReporting(id: any) {
    
    this.userService.ALLReporting(id).subscribe(
      (data: any) => {
        this.listreporting=data;
       console.log(this.listreporting)
            },
      );
  }

  findLatestReporting(id: any) {
   
    this.userService.findLatestReporting(id).subscribe(

      (data: any) => {
       this.listreporting_top3=data;
       console.log('HERE',this.listreporting_top3)
            },
      );
  }





}
