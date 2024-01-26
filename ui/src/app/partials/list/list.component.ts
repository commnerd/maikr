import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  OnChanges,
  Output,
  ViewChild,
  SimpleChanges
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Listable } from '@interfaces/listable';
import { ListItemFactory } from "@interfaces/list-item-factory";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() items!: Array<Listable> | null;
  @Input() itemFactory!: ListItemFactory<Listable>;
  @ViewChild('itemInput') itemInputElement !: ElementRef;
  @Output() updated: EventEmitter<Array<Listable>> = new EventEmitter();
  edit: number = -1;

  ngOnInit(): void {
    if(!this.itemFactory) {
      throw "No item factory provided to list.";
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.items = changes['items'].currentValue;
    if(this.items && this.items[this.items.length - 1].line() !== '') {
      this.items.push(this.itemFactory.empty());
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if(this.items) {
      moveItemInArray(this.items, event.previousIndex, event.currentIndex);
      this.updated.emit(this.items);
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
      this.updated.emit(this.items);
    }
  }
}
