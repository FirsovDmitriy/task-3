import { AbstractControl, ValidatorFn, FormArray, ValidationErrors } from '@angular/forms';

export function maxLengthArrayValidator(maxLength: number): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    if(control instanceof FormArray) {
      if(control.value.length > maxLength) {
        return { maxLengthArray: true }
      }
    }

    return null
  }
}
