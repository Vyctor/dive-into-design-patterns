export class Database {
  private static instance: Database;

  constructor() {
    if (!Database.instance) {
      console.log("Database created");
      Database.instance = this;
      return Database.instance;
    }
    console.log("Database returned");
    return Database.instance;
  }
}
