class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        div.innerHTML = prompt('Любой текст для div', 'Мене поліція шукає, А я сиджу у буряні, Останню пляшку допиваю, І ремонтую жигулі ...');
        document.body.insertBefore(div, document.body.firstChild);
        div.style.cssText = `width: ${this.width}; \
        height: ${this.height};\
        background-color: ${this.bg};\
        font-size: ${this.fontSize};\
        text-align: ${this.textAlign}`;
        // div.style.cssText = JSON.stringify(css).slice(1).replace(/"/g, '').replace(/}/g, '').replace(/,/g, ';');
        console.log(div.style.cssText);
    }
}

const css = new options('100px', '200px', 'blue', "20px", "center");

css.createDiv();