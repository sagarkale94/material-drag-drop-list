import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss']
})
export class HeaderContainerComponent implements OnInit {

  todoList;
  todoList1;

  @Input() done: any;

  constructor() { }

  ngOnInit(): void {
  }

  dragStarted(item) {
    console.log('Item:::', item);
  }

}
