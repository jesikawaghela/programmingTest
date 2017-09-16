import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emit-number',
  templateUrl: './emit-number.component.html',
  styleUrls: ['./emit-number.component.css']
})
export class EmitNumberComponent implements OnInit {
 
  @Output() number: number;

  constructor() { }

  submit(){
    console.log(this.number);  
  }

  ngOnInit() {
  }

}
