export class Database {
  // estático e privado...
  private static database: Database;
  // Contrutor privado não permite new Database() fora da classe - criando um singleton
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(this.host, this.user, this.password + " connected");
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log("Retornando instância já criada");
      return Database.database;
    }

    console.log("Criando instância");
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db = Database.getDatabase("localhost", "root", "123456");
db.connect(); // Como não foi instânciado anteriormente, ele criará uma nova instância

const db1 = Database.getDatabase("localhost", "root", "123456");
db1.connect(); // Como já foi instânciado anteriormente, retornará o que já foi instânciado, impedindo de criar uma nova nova conexão

console.log(db1 === db); // true porquê são o mesmo objeto
