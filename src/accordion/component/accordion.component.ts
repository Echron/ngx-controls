import {Component} from '@angular/core';

@Component({
    selector: 'accordion',
    template: '<ng-content select="accordion-section"></ng-content>'
})
export class AccordionComponent {
}
