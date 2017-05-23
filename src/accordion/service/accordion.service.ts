import {Injectable} from '@angular/core';
import {AccordionSectionHeaderComponent} from '../component/accordion-section-header.component';
import {AccordionSectionContentComponent} from '../component/accordion-section-content.component';

@Injectable()
export class AccordionService {

    headers: Array<AccordionSectionHeaderComponent> = [];
    contents: Array<AccordionSectionContentComponent> = [];

    addSectionHeader(header: AccordionSectionHeaderComponent): void {
        this.headers.push(header);
    }

    addSectionContent(body: AccordionSectionContentComponent): void {
        this.contents.push(body);
    }

    collapseAll(): void {
        this.contents.forEach((item) => {
            item.expanded = false;
            item.expandedState = item.expanded.toString();
        });
    }
}
