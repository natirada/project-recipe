import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-project';
  Feature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD3d40HMrRX7PUsazluJ5_1yRPu9Ol59Xc",
      authDomain: "ng-recipe-project-b4fcf.firebaseapp.com"
    });
  }
  onFeature(feature: string) {
    this.Feature = feature;
  }
}
