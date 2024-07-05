import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { TuiRootModule, TUI_SANITIZER } from '@taiga-ui/core';
import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, NgTemplateOutlet, TuiRootModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent {
  title = 'task-3';
}
