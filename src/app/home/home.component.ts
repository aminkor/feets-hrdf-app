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
  public isEmoji: boolean;
  public is4Dots: boolean;
  public is5Dots: boolean;
  public hasAnswered: boolean;
  public isSelected1: boolean;
  public isSelected2: boolean;
  public isSelected3: boolean;
  public isSelected4: boolean;
  public isSelected5: boolean;
  public isLastQuestion: boolean;
  // Progress circle bar
  current: number;
  max: number;
  currentQuestion;
  questionIndex = 0;
  questionsArray = [
    {questionNum: 1, question: '1 Days Of weddings a year', type: 'emoji'},
    {questionNum: 2, question: '2 Days Of weddings a year', type: 'fourDots'},
    {questionNum: 3, question: '3 Days Of weddings a year', type: 'fiveDots'},
    {questionNum: 4, question: '4 Days Of weddings a year', type: 'emoji'},
  ];
  constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.isQuestion = false;
    this.isEmoji = false;
    this.is4Dots = false;
    this.is5Dots = false;
    this.hasAnswered = false;
    this.isSelected1 = false;
    this.isSelected2 = false;
    this.isSelected3 = false;
    this.isSelected4 = false;
    this.isSelected5 = false;
    this.isLastQuestion = false;
    this.max = this.questionsArray.length;

    // this.matIconRegistry.addSvgIcon(
    //   'E01',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/emoji/E01.svg')
    // );
    this.currentQuestion = this.questionsArray[this.questionIndex];
  }
  ngOnInit() {

  }

  goForm() {
    this.router.navigate(['Form']);
  }

  toggleIsQuestion(){
    this.isQuestion = !this.isQuestion;
  }

  selectAnswer(num) {
    if (num === 1) {
      this.isSelected1 = true;
      console.log('1 is selected');
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 2) {
      this.isSelected2 = true;
      console.log('2 is selected');
      this.isSelected1 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 3) {
      this.isSelected3 = true;
      console.log('3 is selected');
      this.isSelected2 = false;
      this.isSelected1 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 4) {
      this.isSelected4 = true;
      console.log('4 is selected');
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected1 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 5) {
      this.isSelected5 = true;
      console.log('5 is selected');
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected1 = false;
      this.hasAnswered = true;
    }
  }

  nextQuestion() {
    // increment the counter
    this.questionIndex ++;
    this.current = this.questionIndex + 1;
    this.currentQuestion = this.questionsArray[this.questionIndex];
    this.isSelected1 = false;
    this.isSelected2 = false;
    this.isSelected3 = false;
    this.isSelected4 = false;
    this.isSelected5 = false;
    console.log('current = ' + this.current);
    if (this.current === this.questionsArray.length) {
      this.isLastQuestion = true;
    }
    this.hasAnswered = false;
  }
}
