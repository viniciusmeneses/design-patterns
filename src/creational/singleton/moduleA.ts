import { MyDatabaseClassic } from "./db/MyDatabaseClassic";

const myDatabase = MyDatabaseClassic.instance;
myDatabase.add({ name: "Vinicius", age: 20 });
myDatabase.add({ name: "João", age: 18 });
myDatabase.show();

export { myDatabase };
