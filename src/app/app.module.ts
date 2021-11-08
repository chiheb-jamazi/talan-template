import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControlName, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AllComponent } from './all/all.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { OxygenComponent } from './oxygen/oxygen.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PatientsComponent } from './patients/patients.component';
import { ALLUsersComponent } from './allusers/allusers.component';
import { AllpatientsComponent } from './allpatients/allpatients.component';
import { AddMedcinComponent } from './add-medcin/add-medcin.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/*import {MatSelectModule} from '@angular/material/select';*/



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    AllComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    OxygenComponent,
    PatientsComponent,
    ALLUsersComponent,
    AllpatientsComponent,
    AddMedcinComponent,
    DetailsPatientComponent,
    ChatbotComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    BrowserAnimationsModule
    //MatFormFieldModule,
    //MatSelectModule

  ],
  entryComponents: [
    ChatbotComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
