import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import {
  TuiTextfieldControllerModule,
  TuiButtonModule,
  TuiGroupModule,
} from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiSelectModule,
  TuiDataListWrapperModule,
  TuiRadioBlockModule,
} from '@taiga-ui/kit';
import { tuiIconTrash } from '@taiga-ui/icons';
import { maxLengthArrayValidator } from '../validator';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    TuiInputModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
    TuiDataListWrapperModule,
    TuiRadioBlockModule,
    TuiButtonModule,
    TuiGroupModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  options = ['Русский', 'English'];
  iconTrash = tuiIconTrash

  constructor(private fb: FormBuilder) {}

  readonly formState = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    lang: new FormControl(this.options[0]),
    role: new FormControl('Пользователь'),
    skills: this.fb.array([], [maxLengthArrayValidator(3)]),
  });

  get skills() {
    return this.formState.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index:number) {
    this.skills.removeAt(index)
  }

  onSubmit() {
    const { formState } = this
    const toString = JSON.stringify(formState.value)
    console.log(toString)
    formState.reset()
  }

  isDisabled(): boolean {
    return this.formState.invalid
  }
}
