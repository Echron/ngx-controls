import {NgModule} from '@angular/core';

import {AccordionComponent} from './component/accordion.component';
import {AccordionSectionComponent} from './component/accordion-section.component';
import {AccordionSectionHeaderComponent} from './component/accordion-section-header.component';
import {AccordionSectionContentComponent} from './component/accordion-section-content.component';
import {AccordionService} from './service/accordion.service';
import {AccordionAnimationsService} from './service/accordion-animations.service';
import {AccordionEventService} from './service/accordion-event.service';

@NgModule({
    declarations: [
        AccordionComponent,
        AccordionSectionComponent,
        AccordionSectionHeaderComponent,
        AccordionSectionContentComponent],
    providers: [
        AccordionService,
        AccordionAnimationsService,
        AccordionEventService],
    exports: [AccordionComponent,
        AccordionSectionComponent,
        AccordionSectionHeaderComponent,
        AccordionSectionContentComponent
    ]
})
export class AccordionModule {

}
