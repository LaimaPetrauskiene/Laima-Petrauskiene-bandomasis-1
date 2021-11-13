class CarCardComponent {
    static USD_EUR = 0.87;

    constructor(props) {
        this.props = props;

        this.init();
    }



    init = () => {
        const { brand, model, year, fuelTypes, price, imgSrc } = this.props;
        const { amount, currency } = price;

        const finalPrice = currency === '$' ? amount * CarCardComponent.USD_EUR : amount;
        const formatedPrice = Math.round(100 * finalPrice) / 100 + ' €';

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = 'card p-3 shadow';
        this.htmlElement.innerHTML = `
        <img src="${imgSrc}" />
        <h2 class="h5">${brand} ${model}</h2>
        <ul>
            <li>
            <span>year</span>:
            <strong>${year}</strong>
            </li>
            <li>
            <span>fuel type</span>:
            <strong>${fuelTypes}</strong>
            </li>
            <li>
            <span>price</span>:
            <strong>${formatedPrice}</strong>
            </li>
        </ul>
        `;
    }
}