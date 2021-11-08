import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { bouteille } from '../model/bouteille';
import { Patient } from '../model/Patient';
import { medecin_patient } from '../model/medecin_patient';
import { allusers } from '../model/allusers';
import { reporting } from '../model/reporting';
import { user_roles } from '../model/user_roles';
import { user } from '../model/user';


const API_URL = 'http://localhost:8080/api/test/';
const API_URL2 = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  public bouteilleAll() {
    return this.http.get<bouteille[]>(API_URL2 + 'Allbouteille');
  }

  public getPatient(user_id: any): Observable<Patient[]>{

    let params = new HttpParams();
    params = params.append('user_id', user_id);

   //return this.http.get<Patient[]>(API_URL2 + 'getPatientDetails/',  {params: params});
   return this.http.get<Patient[]>(API_URL2 +`getPatientDetails/${user_id}`, /*{params: params}*/); 

  }

  public getPatientsMedecin(id: any): Observable<medecin_patient[]>{

    let params = new HttpParams();
    params = params.append('id', id);

   //return this.http.get<Patient[]>(API_URL2 + 'getPatientDetails/',  {params: params});
   return this.http.get<medecin_patient[]>(API_URL2 +`findPatientMedecin/${id}`, /*{params: params}*/); 

  }
  public ALLUsers() {
    return this.http.get<allusers[]>(API_URL2 + 'findAllUsers');
  }

  public followPatient(patient_id: any, medecin_id: any) {

    let params = new HttpParams();
    params = params.append('patient_id', patient_id);
    params = params.append('medecin_id', medecin_id);

    return this.http.post(API_URL2 +`followPatient/${patient_id}/${medecin_id}`, medecin_patient); 

  }
  
  public Addreporting(iddetails: any, datedetails: any,Message:any) {

    let params = new HttpParams();
    params = params.append('iddetails', iddetails);
    params = params.append('datedetails', datedetails);
    params = params.append('Message', Message);

    return this.http.post(API_URL2 +`Addreporting/${iddetails}/${datedetails}/${Message}`, reporting); 

  }
  public findPatientByUsername(patient_name: any){

    let params = new HttpParams();
    params = params.append('patient_name', patient_name);

   //return this.http.get<Patient[]>(API_URL2 + 'getPatientDetails/',  {params: params});
   return this.http.get<allusers>(API_URL2 +`findPatientByUsername/${patient_name}`); 

  }
  public ALLReporting(id:any) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get<reporting[]>(API_URL2 + `findreporting/${id}`);
  }

  public findUsersRoles(id:any) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get<user_roles[]>(API_URL2 + `findUsersRoles/${id}`);
  }

  public deleteDoctor(id:any) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.delete(API_URL2 + `deleteDoctor/${id}`);
  }

  public findLatestReporting(id:any) {
    let params = new HttpParams();
    params = params.append('id', id);

    return this.http.get<reporting[]>(API_URL2 + `findLatestReporting/${id}`);
  }

}