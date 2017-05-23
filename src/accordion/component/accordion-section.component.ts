import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';

import {AccordionSectionContentComponent} from './accordion-section-content.component';
import {AccordionEventService} from '../service/accordion-event.service';
import {AccordionService} from '../service/accordion.service';

@Component({
    selector: 'app-accordion-section',
    template: '<ng-content select="app-accordion-section-header"></ng-content><ng-content select="app-accordion-section-content"></ng-content>',
    providers: [AccordionEventService]
})
export class AccordionSectionComponent implements AfterContentInit {

    @ContentChildren(AccordionSectionContentComponent) contentListBodies: QueryList<AccordionSectionContentComponent>;

    constructor(private accordionService: AccordionService) {
    }

    ngAfterContentInit() {
        // store list bodies in 'CollapsibleService'
        this.contentListBodies.forEach((item) => {
            this.accordionService.addListBody(item);
        });
    }

}
