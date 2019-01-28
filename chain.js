class Chain {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tab = [];
        this.l = randomNumber(10, 20); //długosc tablicy
        this.mainColor = "rgb(0,255,90)";
        this.lightColor = "rgb(0,255,170)";
    }

    showASymbol(char, y, color) {
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.mainColor;
        ctx.fillStyle = color;
        ctx.font = "600 " + fontSize + "px Arial";
        ctx.fillText(char, this.x, y);
    }

    init() {
        for (let i = 0; i < this.l; i++) {
            let char = String.fromCharCode(0x30A0 + randomNumber(0, 90));
            this.tab.push(char);
        }
    }

    showChain() {
        // for (let i in this.tab) {
        //     let x = this.y + (i * fontSize);
        //     this.showASymbol(this.tab[i], x, this.mainColor);
        // }
        let s;
        let x;
        for (let i = 0; i < this.tab.length - 1; i++) {
            s = i;
            x = this.y + (i * fontSize);
            this.showASymbol(this.tab[i], x, this.mainColor);
        }
        this.showASymbol(this.tab[s + 1], x, this.lightColor);
    }

    update() {
        this.showChain();
        if (this.y > canvasHeight) {
            this.tab = [];
            this.l = randomNumber(10, 20);
            this.init();
            this.y = 0 - this.tab.length * fontSize;
        } else {
            this.y += fontSize;
        }
        let char = String.fromCharCode(0x30A0 + randomNumber(0, 90));
        this.tab.push(char);
        this.tab.splice(0, 1);
    }
}