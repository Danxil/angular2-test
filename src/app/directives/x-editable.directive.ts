import {
  Directive,
  ElementRef,
  Input,
  Output,
  Injector,
  AfterContentInit,
  EventEmitter
} from 'angular2/core';

declare var window

@Directive({
  selector: '[danxilXEditable]',
})
export class XEditableDirective implements AfterContentInit {
  private _$elem;
  @Input() name: string;
  @Input() danxilXEditable: string;
  @Output() danxilXEditableChange: EventEmitter<string> = new EventEmitter();
  private _serverError;
  private _clientError;

  constructor(
    private _elem: ElementRef
  ) {
    this._$elem = $(_elem.nativeElement);
  }

  ngAfterContentInit() {
    console.log(this.name)
    window.a = this._$elem.editable({
      send: 'newer',
      success: (response, newVal)=> {
        this.danxilXEditable = newVal;
        this.danxilXEditableChange.next(this.danxilXEditable);
      },
      validate: ()=> {
        return ['ololo', 'awdwa']
      }
    });
  }
}