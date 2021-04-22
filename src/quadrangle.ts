class Quadrangle {
    public side1: number | undefined;
    public side2: number | undefined;
    public side3: number | undefined;
    public side4: number | undefined;

    constructor() {
    }

    setSides(side1: number,side2: number, side3: number, side4: number) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.side4 = side4;
    }

    perimeter(): number {
        if(this.side1&&this.side2&&this.side3&&this.side4){
            return this.side1 + this.side2 + this.side3 + this.side4;
        }
        throw Error("Перед вычислением периметра установите стороны четырехугольника")
    }

    square():number {
        if(this.side1&&this.side2&&this.side3&&this.side4) {
            let p = this.perimeter() / 2;
            return Math.sqrt((p - this.side1) * (p - this.side2) * (p - this.side3) * (p - this.side4))
        }
       throw Error("Перед вычислением площади установите стороны четырехугольника");
    }

}


class Square extends Quadrangle{
    setSides(side1: number) {
        super.setSides(side1, side1, side1, side1);
    }

    perimeter(): number {
        if(this.side1){
            return this.side1*4;
        }
        throw Error("Перед вычислением периметра установите стороны четырехугольника")
    }

    square(): number {
        if(this.side1){
            return this.side1*this.side1;
        }
        throw Error("Перед вычислением площади установите стороны четырехугольника");
    }
}

let quandr1 = new Quadrangle();
quandr1.setSides(7, 5, 8, 5);
console.log("Периметр четырехугольника со сторонами " + quandr1.side1 + ", " + quandr1.side2 + ", " + quandr1.side3 + ", " + quandr1.side4 + " = " +  quandr1.perimeter());
console.log("Площадь четырехугольника(который можно вписать в окружность) со сторонами " + quandr1.side1 + ", " + quandr1.side2 + ", " + quandr1.side3 + ", " + quandr1.side4 + " = " +  quandr1.square())

let sq1 = new Square();
sq1.setSides(5);
console.log("Периметр квадрата со стороной " + sq1.side1 + " = " +  sq1.perimeter());
console.log("Площадь квадрата со стороной " + sq1.side1 + " = " +  sq1.square());

let sq2 = new Square();
console.log('Вызывается метод площади квадрата у которого не заданы стороны')
sq2.square();
