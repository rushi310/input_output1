import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { Istudent } from '../../../model/student';

@Component({
  imports: [MatAnchor,FormsModule],
  selector: 'app-std-form',
  styleUrl: './std-form.scss',
  templateUrl: './std-form.html',
})
export class StdForm {
  isInEditMode:boolean = false
  @ViewChild('stdForm') stdForm!:NgForm
  @Output() emitNewStd:EventEmitter<Istudent> = new EventEmitter<Istudent>()
  
  onAddStudent(){
    if(this.stdForm.valid){
      let NEW_OBJ:Istudent = {
        ...this.stdForm.value,id:Date.now().toString()
      }
      this.emitNewStd.emit(NEW_OBJ)
      this.stdForm.resetForm()
    }
  }
  onUpdateStd(){

  }
}
