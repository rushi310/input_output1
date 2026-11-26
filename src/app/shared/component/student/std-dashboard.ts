import { students } from './../../const/student';
import { Component, inject } from '@angular/core';
import { StdForm } from './std-form/std-form';
import { StdTable } from './std-table/std-table';
import { Istudent } from '../../model/student';
import { Snackbar } from '../../service/snackbar';

@Component({
  imports: [StdForm, StdTable],
  selector: 'app-std-dashboard',
  styleUrl: './std-dashboard.scss',
  templateUrl: './std-dashboard.html',
})
export class StdDashboard {
  private _snackBar =inject(Snackbar)
  stdArr: Istudent[] = [...students]

  getNewStd(NEW_OBJ:Istudent){
    this.stdArr = [NEW_OBJ, ...this.stdArr]
    this._snackBar.openSnackBar(`The new student added successfully`)
  }
  getRemoveId(removeId:string){
    
  }
}
