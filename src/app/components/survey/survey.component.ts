import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { FormControl, Validators } from '@angular/forms';
import { style } from '@angular/animations';



@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  newSurvey: Survey = {
    mail: '',
    genre: ''
  };

  checked = false;
  internalResults: Survey[];
  send: Boolean = true;

  nameField: FormControl;

  constructor(
    public surveyService: SurveyService
  ) {
    this.nameField = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  ngOnInit(): void {
  }

  assignGenre(option: String) {
    if(option === this.newSurvey.genre) {
      this.newSurvey.genre = '';
    } else {
      this.newSurvey.genre = option;
    }
      
    console.log(this.newSurvey.genre);
  }

  sendSurvey() {
    if(this.nameField.valid) {
      this.newSurvey.mail = this.nameField.value;
    } else {
      alert('Debes Ingresar un Email Valido Antes de Enviar');
      return;
    }
    if(this.newSurvey.genre !== '') {
      this.surveyService.getQuizzes().subscribe(
        res => {
          this.internalResults = res;
        },
        err => alert('Ha ocurrido un error')
      )

      for(let i = 0; i < this.internalResults.length; i++) {
        if(this.internalResults[i].mail == this.newSurvey.mail) {
          this.send = false;
        }
      }

      if(this.send) {
        this.surveyService.createQuiz(this.newSurvey).subscribe(
          res => {
            alert('Enviado!');
            window.location.href= '/';
          },
          err => alert('Ha ocurrido un error')
        )
      } else {
        alert('El mail de usuario ya fue utilizado');
        this.nameField.setValue('');
        return;
      }
    } else {
      alert('Debes Elegir un genero musical antes de Enviar');
      return;
    }
  }
}
