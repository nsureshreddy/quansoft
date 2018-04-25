export class RateComponent {
    label: string;
    items: RateItem []
    constructor(label: string, items: RateItem[]) {
        this.label = label;
        this.items = items;
    }
}

export class RateItem {
    code: string;
    description: string;
    uom: string;
    coeff: string;
    rate: number;
    amount: number;
}