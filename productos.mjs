export class Memoria {
  constructor() {
    this.array = [];
    this.count = 0;
  }
  getArray() {
    return this.array;
  }
  getElementById(id) {
    const result = this.array.find(element => element.id == id);
    return result;
  }
  addElement(objeto) {
    this.array.push({ ...objeto, id: this.count + 1 });
    this.count++;
    return objeto;
  }
}
