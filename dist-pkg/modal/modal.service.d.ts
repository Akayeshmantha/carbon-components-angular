import { ComponentFactoryResolver, ComponentRef } from "@angular/core";
import { AlertModalData } from "./alert-modal.interface";
import { PlaceholderService } from "./../placeholder/placeholder.module";
/**
 * Modal service handles instantiating and destroying modal instances.
 * Uses ModalPlaceholderService to track open instances, and for it's placeholder view reference.
 *
 * ```typescript
 * export class ModalService {
 * 	registerViewContainerRef(vcRef: ViewContainerRef): void {}
 * 	create<T>(data: {component: any, inputs?: any}): void {}
 * 	destroy(index: number = -1): void {}
 * }
 * ```
 */
export declare class ModalService {
    resolver: ComponentFactoryResolver;
    placeholderService: PlaceholderService;
    protected static modalList: Array<ComponentRef<any>>;
    /**
     * Creates an instance of `ModalService`.
     */
    constructor(resolver: ComponentFactoryResolver, placeholderService: PlaceholderService);
    /**
     * Creates and renders the modal component that is passed in.
     * `inputs` is an optional parameter of `data` that can be passed to the `Modal` component.
     */
    create<T>(data: {
        component: any;
        inputs?: any;
    }): ComponentRef<any>;
    /**
     * Creates and renders a new alert modal component.
     * @param data You can pass in:
     * `modalType` - "default" | "danger" = "default",
     * `modalLabel` - a label shown over the title,
     * `modalTitle` - modal's title,
     * `modalContent` - modal's content, could include HTML tags.
     * `buttons` is an array of objects
     * ```
     * {
     * 		text: "Button text",
     * 		type: "primary" | "secondary" | "tertiary" | "ghost" | "danger" | "danger--primary" = "primary",
     * 		click: clickFunction,
     * }
     * ```
     */
    show(data: AlertModalData): ComponentRef<any>;
    /**
     * Destroys the modal on the supplied index.
     * When called without parameters it destroys the most recently created/top most modal.
     */
    destroy(index?: number): void;
}
