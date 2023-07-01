import { useEffect, useState } from "react";
import { usePagination } from "../../shared/hooks/usePagination";
import axios from "axios";

import CarListItem from "./CarListItem/CarListItem";
import MyPagination from "../../shared/UI/Pagination/MyPagination";

import s from './carList.module.scss';

const CarList = ({ cars, setCars, filter }) => {

  const itemsPerPage = 10;
  const { currentPage, goToPage, goToNextPage, goToPreviousPage } = usePagination(1);

    const updateCar = (updatedCar) => {
    const updatedCars = cars.map((car) => {
      if (car.id === updatedCar.id) {
        return {
          ...car,
          car_color: updatedCar.color,
          price: updatedCar.price,
          availability: updatedCar.availability,
        };
      }
      return car;
    });
      

    setCars(updatedCars); 
    };
    
        const handleDelete = (carId) => {
        const updatedCars = cars.filter((car) => car.id !== carId);
        setCars(updatedCars);
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedData = cars.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(cars.length / itemsPerPage);

    return (
        <form className="container">
        <h1 className={s.title}>
          Car List
        </h1>
          <table className={s.table}>
            <thead className={s.tableHead}>
              <tr>
                <th>Company</th>
                <th>Model</th>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Actions columns</th>
              </tr>
            </thead>
            {paginatedData.length ? (
            <tbody className={s.carList}>
              {paginatedData.map((car, index) => (
                <CarListItem
                  key={car.id}
                  number={indexOfFirstItem + index + 1}
                  car={car}
                  updateCar={updateCar}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          ) : (
            <tbody className={s.carList}>
              <tr>
                <td colSpan="8" style={{ textAlign: 'center' }}>
                  <h2>Nothing found for your request</h2>
                </td>
              </tr>
            </tbody>
          )}
        </table>
        {totalPages > 1 && (
          <MyPagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
          />
        )}
        </form>
    );
};

export default CarList;