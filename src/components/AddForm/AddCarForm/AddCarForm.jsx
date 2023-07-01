import { useState } from "react";

import MyInput from "../../../shared/UI/Input/MyInput";
import MyButton from "../../../shared/UI/Button/MyButton";

import s from './addCarForm.module.scss'

const AddCarForm = ({create, closeModal}) => {

    const [car, setCar] = useState(
        {
            car: '',
            car_model: '',
            car_vin: '',
            car_color: '',
            car_model_year: '',
            price: '',
            availability: ''
        }
    );

    const addNewCar = (e) => {
        e.preventDefault()
        const newCar = { ...car, id: Date.now() }
        create(newCar)
        setCar({
            car: '',
            car_model: '',
            car_vin: '',
            car_color: '',
            car_model_year: '',
            price: '',
            availability: ''
        })
    }

    const handleCloseModal = () => {
        setCar({
            car: '',
            car_model: '',
            car_vin: '',
            car_color: '',
            car_model_year: '',
            price: '',
            availability: ''
        });
        closeModal();
    };

    return (
        <form className={s.form} action="">
            <MyInput
                className={s.myInput}
                value={car.car}
                type='text'
                onChange={e => setCar({...car, car: e.target.value})}
                placeholder="Company"
            />
            <MyInput
                className={s.myInput}
                value={car.car_model}
                type='text'
                onChange={e => setCar({...car, car_model: e.target.value})}
                placeholder="Model"
            />
            <MyInput
                className={s.myInput}
                value={car.car_vin}
                type='text'
                onChange={e => setCar({...car, car_vin: e.target.value})}
                placeholder="VIN"
            />
            <MyInput
                className={s.myInput}
                value={car.car_model_year}
                type='text'
                onChange={e => setCar({...car, car_model_year: e.target.value})}
                placeholder="Year"
            />
            <MyInput
                className={s.myInput}
                value={car.car_color}
                type='text'
                onChange={e => setCar({...car, car_color: e.target.value})}
                placeholder="Color"
            />
            <MyInput
                className={s.myInput}
                value={car.price}
                type='text'
                onChange={e => setCar({...car, price: e.target.value})}
                placeholder="Price"
            />
            <MyInput
                className={s.myInput}
                value={car.availability}
                type='text'
                onChange={e => setCar({...car, availability: e.target.value})}
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