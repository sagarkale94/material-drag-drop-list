import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MaterialDragDropListDemo';

  checked = false;

  todo = [
  ];

  yAxis = [
  ];

  done = [
    {
      title: 'Get up',
      isChecked: false,
    },
    {
      title: 'Brush teeth',
      isChecked: false,
    },
    {
      title: 'Take a shower',
      isChecked: false,
    },
    {
      title: 'Check e-mail',
      isChecked: false,
    },
    {
      title: 'Walk dog',
      isChecked: false,
    }
  ];

 
  onShowDataBtnClicked() {
    // console.log(this.todo);
    // console.log(this.yAxis);
    // alert('X-axis: '+this.todo[0].title+' & Y-axis: '+this.yAxis[0].title);
    console.log(this.done);
    
  }

}
