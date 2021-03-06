import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }

  //HttpBook

  postBook(book){
    return this.http.post(environment.apiBaseUrl + '/postbook', book);
  }
  allbooks(){
    return this.http.get(environment.apiBaseUrl + '/allbooks');
  }
  getCurrentUserBook(){
    return this.http.get(environment.apiBaseUrl + '/allbooks/currentUserBook');
  }
  getSingleBookViewDetails(id){
    return this.http.get(environment.apiBaseUrl + '/book/'+id);
  }
  getSingleBookUserDetails(id){
    return this.http.get(environment.apiBaseUrl + '/userProfile/'+id);
  }
  filterBook(Book){
    return this.http.post(environment.apiBaseUrl + '/allbook/search', Book);
  }
  getListByLocation(Location){
    return this.http.post(environment.apiBaseUrl + '/allbook/search/location', Location);
  }
  deleteBook(Id){
    return this.http.delete(environment.apiBaseUrl + '/book/'+Id);
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
