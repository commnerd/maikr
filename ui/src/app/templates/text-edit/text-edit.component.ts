import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text-edit',
  templateUrl: './text-edit.component.html',
  styleUrls: ['./text-edit.component.scss']
})
export class TextEditComponent implements OnInit {

  editMode: boolean = false;

  @Input() input!: string;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() editing: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    if(this.input.length <= 0) {
      this.editMode = true;
    }
  }

  blur() {
    this.inputChange.emit(this.input);
    if(this.input.length > 0) {
      this.editMode = false;
    }
  }

  keyUp(event: KeyboardEvent) {
    if(event.key === 'Enter'){
      event.target?.dispatchEvent(new Event('blur'))
    }
  }

  doubleClick(event: FocusEvent){
    this.editMode = true;
  }

}
