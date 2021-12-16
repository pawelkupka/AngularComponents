import { Component, ElementRef, Injector, Renderer2, OnInit, AfterViewInit, OnDestroy, OnChanges, NgZone, ChangeDetectorRef, SimpleChanges, forwardRef, ContentChild } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { L10N_PREFIX, LocalizationService } from '@progress/kendo-angular-l10n';
import { MyTextboxPrefixTemplateDirective } from './my-textbox-prefix.directive';

@Component({
  selector: 'my-textbox',
  templateUrl: './my-textbox.component.html',
  styleUrls: ['./my-textbox.component.scss'],
  providers: [
    LocalizationService,
    { provide: L10N_PREFIX, useValue: 'my-textbox' },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyTextboxComponent),
      multi: true
    }
  ]
})
export class MyTextboxComponent extends TextBoxComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  @ContentChild(MyTextboxPrefixTemplateDirective, { static: false })
  public myPrefixTemplate: MyTextboxPrefixTemplateDirective;

  constructor(
    localizationService: LocalizationService,
    ngZone: NgZone,
    changeDetector: ChangeDetectorRef,
    renderer: Renderer2,
    injector: Injector,
    hostElement: ElementRef) {
    super(
      localizationService,
      ngZone,
      changeDetector,
      renderer,
      injector,
      hostElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  getFormControl(): FormControl {
    return new FormControl();
  }
}
