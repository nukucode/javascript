//: Singleton pattern

/* Singleton is a specila creational design pattern in which only one instane of a class can exist. It works like this - if no instance of the singleton class exists the a new instance is created and returned, but if an instance already exists, then the reference to the exiting instance is returned.

=> A perfect real-life example would be that of mongoose (the famouse Node.js ODM libaray for MongoDb). It utilizes the singleton pattern.*/

class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;

    return this;
  }

  getData() {
    return this._data;
  }

  setData(data) {
    this._data = data;
  }
}

// usage
const mongo = new Database("mongo");
console.log(mongo.getData()); // mongo

const mySql = new Database("mySql");
console.log(mySql.getData()); // mongo
