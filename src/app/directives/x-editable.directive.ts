import {
  Directive,
  ElementRef,
  Input,
  Injector,
  AfterContentInit
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

  @Input('danxilXEditable') private _danxilXEditable: string

  constructor(
    private _elem: ElementRef,
    private _injector: Injector
  ) {
    this._$elem = $(_elem.nativeElement);
  }

  ngAfterContentInit() {
    console.log(this._injector.parent)

    this._$elem.editable({
      url: '/post',
      success: (response, newVal)=> {
        this._danxilXEditable = newVal
      }
    });
  }

  onMouseEnter() {
    console.log('enter', arguments)
  }

  onMouseLeave() {
    console.log('leave', arguments)
  }
}