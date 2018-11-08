import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isQuestion: boolean;
  constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.isQuestion = false;
    // this.matIconRegistry.addSvgIcon(
    //   'E01',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/emoji/E01.svg')
    // );
  }



  ngOnInit() {

  }

  goForm() {
    this.router.navigate(['Form']);
  }

  toggleIsQuestion(){
    this.isQuestion = !this.isQuestion;
  }

}
