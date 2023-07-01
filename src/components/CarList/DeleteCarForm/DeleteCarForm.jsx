import MyButton from "../../../shared/UI/Button/MyButton";

import s from './deleteCarForm.module.scss';


const DeleteCarForm = ({ car, onDelete, closeModal }) => {
    const handleDelete = () => {
        onDelete(car.id);
        closeModal();
    };
        
    const handleCancel = () => {
        closeModal();
    };


    return (
        <div className={s.form} action="">
            <h3>Are you sure you want to perform this action?</h3>
            <div className={s.btnContainer}>
                <MyButton className={s.myBtn} btnText="YES" type="button" onClickBtn={handleDelete}/>
                <MyButton className={s.myBtn} btnText="NO" type="button" onClickBtn={handleCancel}/>
            </div>
        </div>
    );
};

export default DeleteCarForm;