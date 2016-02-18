import {
  Directive,
  ElementRef,
  Input,
  Output,
  Injector,
  AfterContentInit,
  EventEmitter
} from 'angular2/core';

@Directive({
  selector: '[danxilXEditable]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class XEditableDirective implements AfterContentInit{
  private _$elem

  @Input() danxilXEditable: string
  @Output() danxilXEditableChange: EventEmitter<string> = new EventEmitter()

  constructor(
    private _elem: ElementRef
  ) {
    this._$elem = $(_elem.nativeElement);
  }

  ngAfterContentInit() {
    this._$elem.editable({
      url: '/post',
      success: (response, newVal)=> {
        this.danxilXEditable = newVal
      }
    });
  }

  onMouseEnter() {
    this.danxilXEditable = 'ololo11111'
    this.danxilXEditableChange.next(this.danxilXEditable )

    console.log(this.danxilXEditable )
    console.log('enter', arguments)
  }

  onMouseLeave() {
    console.log('leave', arguments)
  }
}