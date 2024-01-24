import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Listable } from '@interfaces/listable';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items!: Array<Listable> | null;
  @ViewChild('itemInput') itemInputElement !: ElementRef;

  edit: number = -1;

  ngOnInit(): void {
    let newItem = {
      value: "",
      line: function() {
        return this.value;
      },
      updateLine: function(v: string) {
        this.value = v;
      }
    };
    this.items?.push(newItem);
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.items) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
  }

  focus(index: number): void {
    this.edit = index;
    setTimeout(() => {
      this.itemInputElement.nativeElement.focus();
    }, 0);
  }

  update(index: number, event: Event): void
  {
    if(this.items != null && this.items[index] != undefined && event.currentTarget != null) {
      this.items[index].updateLine((event.currentTarget as any)['value']);
      this.itemInputElement.nativeElement.blur();
    }
  }
}
