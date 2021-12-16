import { Directive, Optional, TemplateRef } from '@angular/core';

@Directive({ selector: '[myTextboxPrefixTemplate]' })
export class MyTextboxPrefixTemplateDirective {
  constructor(@Optional() public templateRef: TemplateRef<any>) {}
}
