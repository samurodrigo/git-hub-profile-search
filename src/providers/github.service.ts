import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



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

  baseUrl : string = 'https://api.github.com/users'
  baseReposUrl : string  = "repos";
  constructor(private http : Http) {
  }

  getUserInformation(username : string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError);
  }

  getRepositoryInformation(username: string) : Observable<Repository[]>{
    return this.http.get(`${this.baseUrl}/${username}/${this.baseReposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError);
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

  private logData(data : Response){
    console.log(data);
  }

  private extractData(data : Response){
    return data.json();
  }

  private handleError(error: Response | any){
    return Observable.throw(error.json().error || "Server error.");
  }
}
