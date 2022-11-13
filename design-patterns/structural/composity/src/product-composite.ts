export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(private name: string, private price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...product: ProductComponent[]): void {
    this.children.push(...product);
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    productIndex === -1 ? null : this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce(
      (total, product) => total + product.getPrice(),
      0
    );
  }
}

const shirt = new ProductLeaf("Camiseta", 50);
const boots = new ProductLeaf("Tênis", 100);
const hat = new ProductLeaf("Boné", 20);

const productBox = new ProductComposite();

productBox.add(shirt, boots, hat);

console.log("Box: ", productBox);
console.log("Price: ", productBox.getPrice());

const tablet = new ProductLeaf("Tablet", 500);
const smartphone = new ProductLeaf("Smartphone", 1000);

const productBox2 = new ProductComposite();
productBox2.add(tablet, smartphone);

productBox.add(productBox2);

console.log("Box: ", productBox);
console.log("Price: ", productBox.getPrice());
