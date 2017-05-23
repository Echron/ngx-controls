import {Component, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AccordionAnimationsService} from '../service/accordion-animations.service';
import {AccordionService} from '../service/accordion.service';
import {AccordionEventService} from '../service/accordion-event.service';

@Component({
    selector: 'app-accordion-section-content',
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

    @Input() expanded: boolean;

    constructor(private el: ElementRef,
                private accordionService: AccordionService,
                private eventService: AccordionEventService) {
    }

    ngOnInit() {
        this.eventService.toggleCollapsibleItem$.subscribe(() => {
            this.toggleCollapsibleItem();
        });
    }

    hasContent(): boolean {
        for (const child of this.el.nativeElement.childNodes) {
            if ((<Element>child).tagName != null) {
                return true;
            }
        }
        return false;
    }

    toggleCollapsibleItem() {

        // toggle body's state only if it has any childs
        if (this.hasContent()) {

            const tempExpanded = this.expanded;
            this.accordionService.collapseAll();
            this.expanded = tempExpanded;
            //
            this.expanded = !this.expanded;
            this.expandedState = this.expanded.toString();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.hasContent()) {
            for (const key of Object.keys(changes)) {
                if (key === 'expanded' && changes.expanded.currentValue != null) {
                    // console.debug('CollapsibleBody::ngOnChanges(), currentValue = ' + changes.expanded.currentValue);
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
