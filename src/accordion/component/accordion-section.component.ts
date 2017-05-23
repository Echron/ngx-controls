import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';

import {AccordionSectionContentComponent} from './accordion-section-content.component';
import {AccordionEventService} from '../service/accordion-event.service';
import {AccordionService} from '../service/accordion.service';

@Component({
    selector: 'accordion-section',
    template: '<ng-content select="accordion-section-header"></ng-content><ng-content select="accordion-section-content"></ng-content>',
    providers: [AccordionEventService]
})
export class AccordionSectionComponent implements AfterContentInit {

    @ContentChildren(AccordionSectionContentComponent) sectionContentComponents: QueryList<AccordionSectionContentComponent>;

    constructor(private accordionService: AccordionService) {
    }

    ngAfterContentInit() {
        this.sectionContentComponents.forEach((item) => {
            this.accordionService.addSectionContent(item);
        });
    }

}
