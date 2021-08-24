import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  //title : "sdsd";

constructor(private httpClient : HttpClient)
{
  
} 

ngOnInit()
{
  let obs = this.httpClient.get('http://api.github.com/users/shreyas3');
  obs.subscribe((response) => console.log(response));
}

}
