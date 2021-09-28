import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  URL_API = 'http://localhost:8080';

  results: Survey[];
  internalResults: Survey[];
  singleSurvey: Survey = {
    mail: '',
    genre: ''
  };

  constructor(
    private http: HttpClient
  ) { }

  getQuizzes() {
    return this.http.get<Survey[]>(this.URL_API + '/quizzes');
  }

  createQuiz(survey: Survey) {
    return this.http.post(this.URL_API + '/quiz', survey);
  }

}
