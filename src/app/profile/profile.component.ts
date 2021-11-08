import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient';
import { reporting } from '../model/reporting';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: any;
  email: any;
  urllink: string = "../../assets/images/doctor.gif";
  id: any;
  listdetails!: Patient[];
  listreporting!: reporting[];

  selectFile(event: any){
    if(event.target.files){

      var mimeType = event.target.files[0].type;
      if(mimeType.match(/image\/*/) == null){
        window.alert("Only images are supported");
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event:any) => {
        this.urllink = event.target.result;
  
      }
    }
  }

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
      this.returnPatientDetails(this.id);
      this.ALLReporting(this.id)
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






}


