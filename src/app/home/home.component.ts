import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Data} from '../providers/data';


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
  public userAnswer;
  public isLastQuestion: boolean;
  // Progress circle bar
  current: number;
  max: number;
  currentPlusOne: number;

  currentQuestion;
  questionIndex = 0;
  questionsArray = [
    {questionNum: 1, question: 'In general, how satisfied are you with your life?', type: 'emoji'},
    {questionNum: 2, question: 'My job often interferes with my family or personal needs.', type: 'fiveDots'},
    {questionNum: 3, question: 'With eyes closed, I can tell what my organization\'s vision & mission are about.', type: 'fiveDots'},
    {questionNum: 4, question: 'I can\'t honestly say what I really think or get things off my chest at work.', type: 'fiveDots'},
    {questionNum: 5, question: 'Where I work, I could usually do a much better job if I was given more time', type: 'fiveDots'},
    {questionNum: 6, question: 'If you were given the chance, would you reapply to your current job?', type: 'emoji'},
    {questionNum: 7, question: 'I would recommend my company as a great place to work at', type: 'fiveDots'},
    {questionNum: 8, question: 'I\'m proud to work for my company.', type: 'fiveDots'},
    {questionNum: 9, question: 'Where I work, I feel encouraged to come up with new and better ways of doing things.', type: 'fiveDots'},
  ];

  constructor(private router: Router, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private data: Data) {
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
    this.current = 1;
    this.max = this.questionsArray.length;

    // this.matIconRegistry.addSvgIcon(
    //   'E01',
    //   this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/img/emoji/E01.svg')
    // );
    this.currentQuestion = this.questionsArray[this.questionIndex];
  }

  ngOnInit() {
    console.log('----HomeComponent----');
  }

  goForm() {
    // const navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     'results': this.questionsArray
    //   }
    // };
    // this.router.navigate(['Form'], navigationExtras);
    this.data.storage = {
      'results': this.questionsArray
    };
    this.router.navigate(['Form']);
    console.log('Results = ');
    console.log(this.questionsArray);
  }

  toggleIsQuestion() {
    this.isQuestion = !this.isQuestion;
  }

  selectAnswer(num) {
    if (num === 1) {
      this.isSelected1 = true;
      // console.log('1 is selected');
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 2) {
      this.isSelected2 = true;
      // console.log('2 is selected');
      this.isSelected1 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 3) {
      this.isSelected3 = true;
      // console.log('3 is selected');
      this.isSelected2 = false;
      this.isSelected1 = false;
      this.isSelected4 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 4) {
      this.isSelected4 = true;
      // console.log('4 is selected');
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected1 = false;
      this.isSelected5 = false;
      this.hasAnswered = true;
    } else if (num === 5) {
      this.isSelected5 = true;
      // console.log('5 is selected');
      this.isSelected2 = false;
      this.isSelected3 = false;
      this.isSelected4 = false;
      this.isSelected1 = false;
      this.hasAnswered = true;
    }
    this.userAnswer = num;
    console.log('user selected = ' + this.userAnswer);
    const new_obj = {'userAnswer = ': this.userAnswer};
    Object.assign(this.currentQuestion, new_obj);
  }


  nextQuestion() {
    // increment the counter
    this.questionIndex++;
    this.current++;
    this.currentPlusOne = this.questionIndex + 1;
    this.currentQuestion = this.questionsArray[this.questionIndex];
    this.isSelected1 = false;
    this.isSelected2 = false;
    this.isSelected3 = false;
    this.isSelected4 = false;
    this.isSelected5 = false;
    console.log('current = ' + this.current);
    console.log('max = ' + this.max);
    console.log('questionIndex = ' + this.questionIndex);
    if (this.currentPlusOne === this.max) {
      this.isLastQuestion = true;
    }
    this.hasAnswered = false;
  }

}
