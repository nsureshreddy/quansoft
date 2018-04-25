export class QuantityComponent {
    items: QuantityRefItem []
    constructor(items: QuantityRefItem[]) {
      this.items = items;
    }
}

export class QuantityRefItem {
    refNo: string;
    description: string;
    no: number;
    l: number;
    b: number;
    d: number;
    quantity: number;
    constructor(data: any) {
      for (const f in data) {
        this[f] = data[f];
      }
    }
}