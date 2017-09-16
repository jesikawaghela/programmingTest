import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  @Input() number: any;
 
  constructor() { }

  ngOnInit() {
  }

}
