import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TraitementsService {

  private _listUsersUrl = 'https://jsonplaceholder.typicode.com/users';
  private _userTodosUrl = '';
  constructor(private http: HttpClient, private _router: Router) { }

  /**
   * Permet de contacter l'api pour avoir la liste des utilisateurs
   */
  getUsers(){
    return this.http.get(this._listUsersUrl);
  }

  /**
   * Permet de contacter l'api pour avoir la liste des taches d'un utilisateur donné
   * @param idUser
   */
  getUserTodos(idUser: any){
    this._userTodosUrl = 'https://jsonplaceholder.typicode.com/users/' + idUser + '/todos';
    return this.http.get(this._userTodosUrl);
  }
}
