import {Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AccordionAnimationsService} from '../service/accordion-animations.service';
import {AccordionService} from '../service/accordion.service';
import {AccordionEventService} from '../service/accordion-event.service';

@Component({
    selector: 'accordion-section-content',
    template: '<ng-content></ng-content>',
    styles: [`
        :host {
            display: block;
            box-sizing: border-box;
            overflow: hidden;
        }
    `],
    animations: AccordionAnimationsService.collapsibleContentAnimation('collapsibleContentState')
})
export class AccordionSectionContentComponent implements OnInit, OnChanges, OnDestroy {
    @HostBinding('@collapsibleContentState')
    expandedState: string;

    //TODO: move this to section component so we can add a class when the section is open
    @Input() expanded: boolean;

    constructor(private element: ElementRef,
                private accordionService: AccordionService,
                private eventService: AccordionEventService) {
    }

    ngOnInit() {
        this.eventService.toggleCollapsibleItem$.subscribe(() => {
            this.toggleCollapsibleItem();
        });
    }

    hasContent(): boolean {
        return this.element.nativeElement.childElementCount > 0;
    }

    toggleCollapsibleItem() {
        if (this.hasContent()) {
            //Close all
            const tempExpanded: boolean = this.expanded;
            this.accordionService.collapseAll();
            this.expanded = tempExpanded;
            //Toggle this one
            this.expanded = !this.expanded;
            this.expandedState = this.expanded.toString();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.hasContent()) {
            for (const key of Object.keys(changes)) {
                if (key === 'expanded' && changes.expanded.currentValue != null) {
                    // this.expanded = changes.expanded.currentValue;
                    this.expandedState = this.expanded.toString();
                }
            }
        }
    }

    // Makes sure we don't have a memory leak by destroying the
    // Subscription when our component is destroyed
    ngOnDestroy() {
        this.eventService.unsubscribe();
    }

}
