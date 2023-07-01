import { useState } from "react";
import MyButton from "../../shared/UI/Button/MyButton";
import MyModal from "../../shared/UI/Modal/MyModal";
import AddCarForm from "./AddCarForm/AddCarForm";

import s from './addForm.module.scss';

const AddForm = ({cars, setCars}) => {
    const [modalActive, setModalActive] = useState(false);

    const createCar = (newCar) => {
        setCars([...cars, newCar]);

    }

    return (
        <div className="container">
            <form className={s.form} action="">
                <MyButton className={s.myBtn} btnText="Add Car" type="button" onClickBtn={() => setModalActive(true)}/>
            </form>
            <MyModal active={modalActive} setActive={setModalActive}>
                <AddCarForm create={createCar} closeModal={() => setModalActive(false)}/>
            </MyModal>
        </div>
    );
};

export default AddForm;