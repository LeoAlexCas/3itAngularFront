import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SurveyService } from './survey.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SurveyService', () => {
  let service: SurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    }).compileComponents();
    service = TestBed.inject(SurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
