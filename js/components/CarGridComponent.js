class CarGridComponent {
    constructor() {
        this.state = {
            loading: false,
            cars: []

        }
        this.init();
    }


    fetchCars = () => API.fetchCars(this.saveCars, alert);

    saveCars = (cars) => {
        this.state.cars = cars;
        this.state.loading = false;
        this.htmlElement.className = 'row g-3';

        this.render();
    }


    init = () => {
        this.state.loading = true;
        this.fetchCars();
        this.htmlElement = document.createElement('div');
        this.render();
    }

    wrapInColumn = (element) => {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-3 col-xl-4';
        column.appendChild(element);
        return column;
    }

    render = () => {
        const { loading, cars } = this.state;
        if (loading) {
            this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"></div>`;
        } else if(cars.length > 0){
            this.htmlElement.innerHTML = '';
            const carElements = cars
            .map(x => new CarCardComponent(x))
            .map(x => x.htmlElement)
            .map(this.wrapInColumn);
            this.htmlElement.append(...carElements);
            
        }else{
            this.htmlElement.innerHTML = `<h2>Šiuo metu mašinų nėra</h2>`;
        }
    }
}