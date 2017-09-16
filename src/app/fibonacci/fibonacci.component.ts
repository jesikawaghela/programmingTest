import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  @Input() number: any;
 
  constructor() { }

  ngOnInit() {
  }

}
