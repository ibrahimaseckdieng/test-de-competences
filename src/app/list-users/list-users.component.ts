import { Component, OnInit } from '@angular/core';
import {TraitementsService} from "../services/traitements.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  // @ts-ignore
  listUsers;

  constructor(private _traitements:TraitementsService, private _router:Router) { }

  ngOnInit(): void {
    //Récupération des utilisateurs à travers le service
    this._traitements.getUsers()
      .subscribe(
        res =>{
          this.listUsers = res;
          console.log(res)
        },
        error => {}
      )
  }

  /**
   * Cette fonction permet d'aller vers la liste des taches
   * de l'utilsateur sur lequel on a cliqué
   * @param idUser
   */
  voirDetailsUser(idUser: any){
    let link = '/user/' + idUser + '/todos';
    this._router.navigate([link]);
  }


}
