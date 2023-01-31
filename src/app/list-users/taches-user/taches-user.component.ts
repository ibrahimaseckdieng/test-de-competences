import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TraitementsService} from "../../services/traitements.service";

@Component({
  selector: 'app-taches-user',
  templateUrl: './taches-user.component.html',
  styleUrls: ['./taches-user.component.scss']
})
export class TachesUserComponent implements OnInit {
  // @ts-ignore
  idUser;
  // @ts-ignore
  user;
  // @ts-ignore
  listUsers
  // @ts-ignore
  userTodos;
  p = 1;

  constructor(private _traitements:TraitementsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Ceci est fait pour récupérer les paramètres de la route
    this.activateRoute.params.subscribe(params => {
      this.idUser = params['idUser'];
      //Récupération des taches d'utilisateur à travers le service
      this._traitements.getUserTodos(this.idUser)
        .subscribe(
          res =>{
            this.userTodos = res;
            console.log(res)
          },
          error => {}
        )

      //Récupération des utilisateurs à travers le service
      this._traitements.getUsers()
        .subscribe(
          res =>{
            this.listUsers = res;
            // @ts-ignore
            this.user = this.listUsers.find(item => item.id === parseInt(this.idUser));
            console.log(this.user);
          },
          error => {}
        )
    });
  }

}
