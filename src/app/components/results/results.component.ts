import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  
  constructor(
    public surveyService: SurveyService
  ) { }

  ngOnInit(): void {
    this.surveyService.getQuizzes()
    .subscribe(
      res => {
        this.surveyService.results = res
      },
      err => console.error(err)
    )
  }

}
