import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.scss']
})
export class TextEditComponent implements OnInit, AfterViewInit {

  editMode: boolean = false;

  @Input() input!: string;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('inputRef') inputRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if(this.input.length <= 0) {
      this.editMode = true;
    }
  }

  blur() {
    if(this.input.length > 0) {
      this.editMode = false;
      this.inputChange.emit(this.input);
    }
  }

  keyUp(event: KeyboardEvent) {
    if(event.key === 'Enter'){
      event.target?.dispatchEvent(new Event('blur'))
    }
  }

  doubleClick(event: FocusEvent){
    this.editMode = true;
    setTimeout(() => {
      this.inputRef.nativeElement.focus();
    }, 0);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputRef.nativeElement.focus();
    }, 0);
  }

}
