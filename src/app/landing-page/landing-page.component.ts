import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  noBuilderPageForUrl: boolean = false;
  builderRSP: Observable<any> | undefined;

  constructor(private http:HttpClient){ }

  ngOnInit():void {
    let apiUrl = 'https://cdn.builder.io/api/v2/content'
    let modelName = 'page'
    this.builderRSP = this.http.get<any>(`${apiUrl}/${modelName}?apiKey=a54c9ecf97f8469b9d9611d82580d299&limit=1&userAttributes.urlPath=/`,{
      headers: { Authorization: `Bearer bpk-619dc4b575a34b36b6839f3489308751` },
    }).pipe(map(data => data.results[0]))
  }

}
