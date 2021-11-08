import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedcinComponent } from './add-medcin/add-medcin.component';
import { AllComponent } from './all/all.component';
import { AllpatientsComponent } from './allpatients/allpatients.component';
import { ALLUsersComponent } from './allusers/allusers.component';
import { BodyComponent } from './body/body.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { DetailsPatientComponent } from './details-patient/details-patient.component';
import { LoginComponent } from './login/login.component';
import { Patient } from './model/Patient';
import { OxygenComponent } from './oxygen/oxygen.component';
import { PatientsComponent } from './patients/patients.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ChatbotService } from './_services/chatbot.service';

const routes: Routes = [
  {
    path:'ALL',component:AllComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:BodyComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'oxygen',component:OxygenComponent
  },
  {
    path:'details',component:DetailsPatientComponent
  },
  {
    path:'addMedcin',component:AddMedcinComponent
  },
  {
    path:'patientmedecin',component:PatientsComponent
  },
  {
    path:'users',component:ALLUsersComponent
  },
  {
    path:'followpatient',component:AllpatientsComponent
  },
  {
    path:'chatbot',component:ChatbotComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
