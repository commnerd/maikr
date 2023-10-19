import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Listable } from '@interfaces/listable';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() items!: Array<Listable> | null;

  ngOnInit(): void {
    this.items?.push({line: () => 'boo'} as Listable);
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.items) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  }
}