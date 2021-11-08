import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Observable, Subject } from 'rxjs';
import { bouteille } from '../model/bouteille';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  listbouteille!: bouteille[];
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService,private tokenStorage: TokenStorageService,private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.returnbouteille();
    
  }

  public greaterThan(subj: any, num: number) {
    return subj < num;
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



  openDialog(): void {
    const dialogRef = this.dialog.open(ChatbotComponent, {width: '900px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  
}
