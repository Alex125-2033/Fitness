function cards() {
    // 78 Используем классы в реальной работе.

    class MenuCard {
        constructor(src, alt, title, descr, price, currency, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.tranfer = 98;
            this.currency = currency;
            this.changeToRUS();
            this.classes = classes;
        }

        changeToRUS() {
            this.price = this.price * this.tranfer;
        }

        render() {
            const element = document.createElement('div');
            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> ${this.currency}</div>
                </div>
            </div>
            `;
            this.parent.append(element);

        }
    }
    
    const getResource = async (url) => {
        const res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price, currency}) => {
            new MenuCard(img, altimg, title, descr, price, currency, '.menu .container').render();
        });
    });
}

export default cards;