import { inject, Service } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Service()
export class Snackbar {
    private _snackbar = inject(MatSnackBar)

    openSnackBar(message: string){
        this._snackbar.open(message,'Close',{
            duration:3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        })
    }
}
