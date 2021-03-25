import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'm-images-angular',
    templateUrl: './images.component.html',
    styles: []
})
export class ImagesComponent implements OnInit {

    @Input() images;
    @Output() upload = new EventEmitter<void>();
    @Output() change = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void { }

    sortableOptions = {
        forceFallback: true,
        group: {
            name: performance.now().toString()
        },
        filter: '.sortable-ignore',
        onMove: function (event, originalEvent) {
            if (event.related.tagName === 'M-BUTTON') {
                return false;
            }
        },
        onEnd: () => this.change.emit()
    };
}
