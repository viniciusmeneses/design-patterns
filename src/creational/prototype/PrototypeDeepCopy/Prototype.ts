export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  public constructor(public name: string, public age: number) {}

  public addAddress(address: Address): void {
    this.addresses.push(address);
  }

  public clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((address) => address.clone());
    return newObj;
  }
}

export class Address implements Prototype {
  public constructor(public street: string, public number: number) {}

  public clone(): Address {
    return new Address(this.street, this.number);
  }
}

const address1 = new Address("Av. Brasil", 15);
const person1 = new Person("Luiz", 30);

person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = "Outro";
person2.name = "João";

console.log(person1);
console.log(person2);
