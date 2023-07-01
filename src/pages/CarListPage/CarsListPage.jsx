import React, { useState, useEffect } from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import AddForm from "../../components/AddForm/AddForm";
import CarList from "../../components/CarList/CarList";
import Loader from "../../shared/UI/Loader/Loader";
import { useFilteredCars } from "../../shared/hooks/useFilteredCars";
import { useFetching } from "../../shared/hooks/useFeyching";

import CarService from "../../API/CarService";

import s from './carListPage.module.scss';

function CarListPage() {

  const [cars, setCars] = useState([]);
  const [filter, setFilter] = useState({ query: '' });
  const SearchedCars = useFilteredCars(cars, filter.query);
  const [fetchCars, isCarsLoading, carError] = useFetching(async () => {
    const cars = await CarService.getAll();
    setCars(cars);
  })

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className={s.container}>
      <SearchForm filter={filter} setFilter={setFilter}/>
      <AddForm cars={cars} setCars={setCars} />
      {carError &&
        <h2>An error occurred ${carError}</h2>
      }
      {isCarsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        : <CarList cars={SearchedCars} setCars={setCars} filter={filter}/>
      }
    </div>
  );
}

export default CarListPage;