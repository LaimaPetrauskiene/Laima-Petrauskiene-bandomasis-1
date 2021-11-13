const baseURL = 'http://localhost:3000';

class API {
    static fetchCars = (success, failure) => {
        fetch(`${baseURL}/cars`)
            .then(res => res.json())
            .then(success)
            .catch(failure)
    }
    static deleteCar = (id, success, failure) => {
        fetch(`${baseURL}/cars/${id}`, { method: 'DELETE' })
            .then(res => res.status === 200 ? success() : failure(res.status.text))
            .catch(failure)
    }
}

// API.fetchCars(
//     console.log,
//     console.error
// )

// API.deleteCar(
//     "3",
//     () =>console.log('Ištrinta sėkmingai'),
//     console.error
// )