import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  active:number =0;

  ngOnInit(): void {
  }
  
  change(index:number) :void {
    this.active=index;
    console.log(this.active);
  }
  
}
