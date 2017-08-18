import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import { User } from '../models/user.interface';
import { Repository } from "../models/repository.interface";

import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from "../mocks/repository.mocks";
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
  }

  /**
   * Encontra o usuário na USER_LIST que possua o username informado
   * Retorna um observable<User> com o primeiro usuario encontrado
   */
  mockGetUserInformation(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
  }

  /**
   * Encontra o repositorio na REPOSITORY_LIST que possua o username informado
   * @param username nome do dono do repositorio
   * @return Observable<Repository[]>
   * 
   */

  mockGetRepositoryInformation(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name == username))
  }
}
