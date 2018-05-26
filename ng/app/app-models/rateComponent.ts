import { MasterResource } from "./masterResource";

export class RateComponent {
    label: string;
    type: string;
    items: MasterResource []
    constructor(label: string, type: string, items: MasterResource[]) {
        this.label = label;
        this.type  = type;
        this.items = items;
    }
}