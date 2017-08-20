import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github.service';
import { User } from "../../models/user.interface";
import { Repository } from "../../models/repository.interface";

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user : User;
  repositories : Repository[];

  constructor(private gitHub : GithubServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation() : void{
    this.gitHub.getUserInformation(this.username).subscribe((data : User) => this.user = data);
    this.gitHub.getRepositoryInformation(this.username).subscribe((data : Repository[]) => this.repositories = data);
    // this.gitHub.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    // this.gitHub.mockGetRepositoryInformation(this.username).subscribe((data : Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username){
      this.getUserInformation();
    }
  }

}
