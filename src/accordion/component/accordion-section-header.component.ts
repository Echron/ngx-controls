import {Component, HostListener} from '@angular/core';
import {AccordionEventService} from '../service/accordion-event.service';

@Component({
    selector: 'app-accordion-section-header',
    template: '<ng-content></ng-content>',
    styles: [`
        :host {
            display: block;
            cursor: pointer;
            min-height: 3rem;
            line-height: 3rem;

        }
    `]
})
export class AccordionSectionHeaderComponent {

    constructor(private eventService: AccordionEventService) {
    }

    @HostListener('click')
    click() {
        this.eventService.toggleCollapsibleItem();
    }

}
