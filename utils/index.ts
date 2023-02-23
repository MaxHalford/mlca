

class Element {
    name: string;

    constructor(
        name: string,
        unit: string,
        inputs: Input[] = [],
        purchase_orders: number = 0,
        traits: Object = {},
        sources: string[] = []
    ) {
      this.name = name;
      this.unit = unit;
      this.inputs = inputs;
      this.purchase_orders = purchase_orders;
      this.traits = traits;
      this.sources = sources;
    }

    take(amount: number) {
      return new Input(this, amount)
    }
  }

class Input {
    element: Element;
    amount: number;

    constructor(element: Element, amount: number) {
        this.element = element;
        this.amount = amount;
      }
}


export {
    Element,
    Input
  }
