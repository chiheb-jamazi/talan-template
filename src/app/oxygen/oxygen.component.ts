import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Observable, Subject } from 'rxjs';
import { bouteille } from '../model/bouteille';


@Component({
  selector: 'app-oxygen',
  templateUrl: './oxygen.component.html',
  styleUrls: ['./oxygen.component.css']
})
export class OxygenComponent implements OnInit {

  listbouteille!: bouteille[];

  constructor(private tokenStorageService: TokenStorageService,private tokenStorage: TokenStorageService,private userService: UserService) { }

  ngOnInit(): void {
    this.returnbouteille();
    
  }

  public greaterThan(subj: any, num: number) {
    return subj <= num;
  }
  
  returnbouteille() {
    
    this.userService.bouteilleAll().subscribe(
      (data) => {
        this.listbouteille=data;
        console.log(this.listbouteille)
            },
      errors => {
        console.log(errors);
        alert(errors.status);
      },
    )
    ;


  
  }

}
