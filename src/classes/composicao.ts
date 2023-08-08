// Composição - Um objeto tem outro objeto como parte dele
// Relação forte - como carro e motor 🚗
// https://prnt.sc/s20YkSyyHjAY
// Se o motor deixar de existir o carro não funcionará - COMPOSIÇÃO

class Carro {
  private readonly motor: Motor = new Motor();

  ligar() {
    return this.motor.ligar();
  }

  acelerar() {
    return this.motor.acelerar();
  }

  frear() {
    return this.motor.frear();
  }

  desligar() {
    return this.motor.desligar();
  }
}

class Motor {
  ligar(): void {
    console.log("O motor está ligado");
  }

  acelerar(): void {
    console.log("O motor está acelerando");
  }

  frear(): void {
    console.log("O motor está freando");
  }

  desligar(): void {
    console.log("O motor está desligado");
  }
}

const carro = new Carro();
carro.acelerar();
