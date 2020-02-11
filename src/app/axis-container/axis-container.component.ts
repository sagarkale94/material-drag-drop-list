import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-axis-container',
  templateUrl: './axis-container.component.html',
  styleUrls: ['./axis-container.component.scss']
})
export class AxisContainerComponent implements OnInit {

  selectedValue = '3';

  @Input() done: any;
  todo = [
  ];

  yAxis = [
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('event', event, event.previousIndex,
      event.currentIndex);

    if (this.todo.length == 0) {
      if (event.previousContainer.id != event.container.id) {
        copyArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        this.done[event.previousIndex].isChecked = true;
        console.log('done', this.done);

      }
    }
  }

  dropY(event: CdkDragDrop<string[]>) {
    copyArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
    this.done[event.previousIndex].isChecked = true;
  }

  onShowDataBtnClicked() {
    console.log(this.todo);
    console.log(this.yAxis);
    alert('X-axis: '+this.todo[0].title+' & Y-axis: '+this.yAxis[0].title);
  }

  onXAxisRemoveClikedListener(item) {
    item.isChecked = false;
    this.todo = [];
  }

  onYAxisRemoveClikedListener(item) {
    item.isChecked = false;
    for (let index = 0; index < this.yAxis.length; index++) {
      if(this.yAxis[index].title == item.title){
        this.yAxis.splice(index,1)
      };
    }
    console.log(this.yAxis);
  }

  getIsAllowed() {
    console.log("Predict", this);
    return true;
  }

  dragStarted(item) {
    console.log('Item:::', item);
  }

}
