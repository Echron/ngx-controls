import {Component} from '@angular/core';

@Component({
    selector: 'app-accordion',
    template: '<ng-content select="app-accordion-section"></ng-content>'
})
export class AccordionComponent {

    // @ContentChildren(AccordionSectionComponent) contentListItems: QueryList<AccordionSectionComponent>;

}
