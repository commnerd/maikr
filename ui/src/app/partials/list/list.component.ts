import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Listable } from '@interfaces/listable';

interface EditModable {
  edit: boolean;
}

interface Updatable {
  update(evt: Event): void
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items!: Array<Listable & EditModable & Updatable> | null;

  ngOnInit(): void {
    let newItem = {
      value: "",
      line: function() {
        return this.value;
      },
      edit: false,
      update: function(v: Event) {
        console.log(event);
      }
    };
    this.items?.push(newItem);
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.items) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  }
}
