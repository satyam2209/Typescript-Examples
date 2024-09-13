type City = {
    name: string,
    population: number
}

type Planet = {
    name: string,
    cities: number
}

type CitiesInPlanet = City & Planet;

let value: CitiesInPlanet = {
    name: "Bhopal",
    population: 1200000,
    cities: 12
}