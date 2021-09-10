interface Producto {
  array: [];
  id: number;
}

export class Memoria {
  // private array: {
  //   id: number;
  //   title: string;
  //   price: number;
  //   thumbnail: string;
  // }[];
  private array: Array<Producto>;
  private count: number;

  constructor() {
    this.array = [];
    this.count = 0;
  }
  getArray() {
    return this.array;
  }
  getElementById(id: number) {
    const result = this.array.find(element => element.id === Number(id));
    return result;
  }
  addElement(objeto: Producto) {
    this.array.push({ ...objeto, id: this.count + 1 });
    this.count++;
    return objeto;
  }

  updateObject(newProduct: Producto, id: number) {
    let index = this.array.findIndex(element => element.id === Number(id));
    this.array[index] = newProduct;
  }

  deleteObject(id: number) {
    let index = this.array.findIndex(element => element.id === Number(id));
    this.array.splice(index, 1);
  }
}
