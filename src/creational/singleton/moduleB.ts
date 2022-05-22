import { MyDatabaseClassic } from "./db/MyDatabaseClassic";

const myDatabase = MyDatabaseClassic.instance;
myDatabase.add({ name: "Pedro", age: 22 });
myDatabase.add({ name: "Henrique", age: 11 });
myDatabase.show();

export { myDatabase };
