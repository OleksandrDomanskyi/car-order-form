import { useMemo } from "react";

export const useFilteredCars = (cars, filter) => {
  const filteredCars = useMemo(() => {
    if (!filter) {
      return cars;
    }

    const filterLowerCase = filter.toLowerCase();

    return cars.filter(
      (car) =>
        car.car.toLowerCase().includes(filterLowerCase) ||
        car.car_model.toLowerCase().includes(filterLowerCase) ||
        car.car_vin.toLowerCase().includes(filterLowerCase) ||
        car.car_color.toLowerCase().includes(filterLowerCase) ||
        car.car_model_year.toString().includes(filterLowerCase) ||
        car.price.toString().includes(filterLowerCase) ||
        car.availability.toString().includes(filterLowerCase)
    );
  }, [cars, filter]);

  return filteredCars;
};