//vendors
import {
    Directive,
    ElementRef,
    Input,
    Output,
    Injector,
    AfterContentInit,
    EventEmitter
} from 'angular2/core';

import {Http} from 'angular2/http'

@Directive({
    selector: '[danxilXEditable]',
})
export class XEditableDirective implements AfterContentInit {
    private _$elem;
    @Input() danxilXEditable;
    @Output() danxilXEditableChange:EventEmitter<any> = new EventEmitter();
    @Input() danxilXEditableOptions:any;

    constructor(private _elem:ElementRef,
                private _http:Http) {
        this._$elem = $(_elem.nativeElement);
    }

    private _getRequestBody(value) {
        var body = {};

        body[this.danxilXEditableOptions.name] = value

        return JSON.stringify(body)
    }

    private _submit(params) {
        var defer = new $.Deferred()

        this._http.post(
            this.danxilXEditableOptions.url,
            this._getRequestBody(params.value)
        ).toPromise()
            .then(defer.resolve, defer.reject)

        return defer.promise();
    }

    private _successCb(response, newVal) {
        this.danxilXEditable = newVal;
        this.danxilXEditableChange.next(this.danxilXEditable);
    }

    private _errorCb(response) {
        return response.json().error || 'Server error';
    }

    private _validateCb() {

    }

    ngAfterContentInit() {
        this._$elem.editable({
            url: this._submit.bind(this),
            success: this._successCb.bind(this),
            error: this._errorCb.bind(this),
            validate: this._validateCb.bind(this)
        })
    }
}