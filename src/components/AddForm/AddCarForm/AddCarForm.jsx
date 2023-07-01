import { useState } from "react";

import MyInput from "../../../shared/UI/Input/MyInput";
import MyButton from "../../../shared/UI/Button/MyButton";

import s from './addCarForm.module.scss'

const AddCarForm = ({create, closeModal}) => {

    const initialCarState =
    {
        car: '',
        car_model: '',
        car_vin: '',
        car_color: '',
        car_model_year: '',
        price: '',
        availability: ''
    };

    const [car, setCar] = useState(initialCarState);

    const addNewCar = (e) => {
        e.preventDefault();
        const newCar = { ...car, id: Date.now() };
        create(newCar);
        setCar(initialCarState);
    }

    const handleCloseModal = () => {
        setCar(initialCarState);
        closeModal();
    };

    const handleInputChange = (e, fieldName) => {
        const updatedCar = { ...car, [fieldName]: e.target.value };
        setCar(updatedCar);
    };

    return (
        <form className={s.form} action="">
            <MyInput
                className={s.myInput}
                value={car.car}
                type='text'
                onChange={(e) => handleInputChange(e, 'car')}
                placeholder="Company"
            />
            <MyInput
                className={s.myInput}
                value={car.car_model}
                type='text'
                onChange={(e) => handleInputChange(e, 'car_model')}
                placeholder="Model"
            />
            <MyInput
                className={s.myInput}
                value={car.car_vin}
                type='text'
                onChange={(e) => handleInputChange(e, 'car_vin')}
                placeholder="VIN"
            />
            <MyInput
                className={s.myInput}
                value={car.car_model_year}
                type='text'
                onChange={(e) => handleInputChange(e, 'car_model_year')}
                placeholder="Year"
            />
            <MyInput
                className={s.myInput}
                value={car.car_color}
                type='text'
                onChange={(e) => handleInputChange(e, 'car_color')}
                placeholder="Color"
            />
            <MyInput
                className={s.myInput}
                value={car.price}
                type='text'
                onChange={(e) => handleInputChange(e, 'price')}
                placeholder="Price"
            />
            <MyInput
                className={s.myInput}
                value={car.availability}
                type='text'
                onChange={(e) => handleInputChange(e, 'availability')}
                placeholder="Availability"
            />
            <div className={s.btnContainer}>
                <MyButton className={s.myBtn} btnText="Add Car" type="button" onClickBtn={addNewCar} />
                <MyButton className={s.myBtn} btnText="Close" type="button" onClickBtn={handleCloseModal}/>
            </div>
        </form>
    );
};

export default AddCarForm;