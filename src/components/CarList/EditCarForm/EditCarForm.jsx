import { useState } from "react";

import MyInput from "../../../shared/UI/Input/MyInput";
import MyButton from "../../../shared/UI/Button/MyButton";

import s from './editCarForm.module.scss';


const EditCarForm = ({ car, closeModal, updateCar }) => {
    const [car_color, setColor] = useState(car.car_color);
    const [price, setPrice] = useState(car.price);
    const [availability, setAvailability] = useState(car.availability);

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedCar = {
            ...car,
            color: car_color,
            price: price,
            availability: availability,
        };

        updateCar(updatedCar);
        closeModal();
    };

    const handleCancel = () => {
        closeModal();
    };

    return (
        <div className={s.form} action="">
            <MyInput
                className={s.myInput}
                value={car.car}
                type='text'
                readOnly
                placeholder="Company"
            />
            <MyInput
                className={s.myInput}
                value={car.car_model}
                type='text'
                readOnly
                placeholder="Model"
            />
            <MyInput
                className={s.myInput}
                value={car.car_vin}
                type='text'
                readOnly
                placeholder="VIN"
            />
            <MyInput
                className={s.myInput}
                value={car.car_model_year}
                type='text'
                readOnly
                placeholder="Year"
            />
            <MyInput
                className={s.myInput}
                value={car_color}
                type='text'
                onChange={handleColorChange}
                placeholder="Color"
            />
            <MyInput
                className={s.myInput}
                value={price}
                type='text'
                onChange={handlePriceChange}
                placeholder="Price"
            />
            <MyInput
                className={s.myInput}
                value={availability}
                type='text'
                onChange={handleAvailabilityChange}
                placeholder="Availability"
            />
            <div className={s.btnContainer}>
                <MyButton
                    className={s.myBtn}
                    btnText="Edit Car"
                    type="submit"
                    onClickBtn={handleSubmit}
                />
                <MyButton className={s.myBtn} btnText="NO" type="button" onClickBtn={handleCancel}/>
            </div>
        </div>
    );
};

export default EditCarForm;