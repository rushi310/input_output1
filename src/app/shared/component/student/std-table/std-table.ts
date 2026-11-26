import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaterialModule } from "../../../material/material-module";
import { Istudent } from '../../../model/student';

@Component({
  imports: [MaterialModule],
  selector: 'app-std-table',
  styleUrl: './std-table.scss',
  templateUrl: './std-table.html',
})
export class StdTable {
  @Input() getStudentArr!:Istudent[]
  @Output() emitRemoveId: EventEmitter<string> = new EventEmitter<string>();

  onEdit(){

  }

  onRemove(removeId:string){
    this.emitRemoveId.emit(removeId)
  }
}
