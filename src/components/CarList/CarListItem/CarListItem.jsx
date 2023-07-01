import { useState } from 'react';
import MySelect from '../../../shared/UI/Select/MySelect';
import MyModal from '../../../shared/UI/Modal/MyModal';
import EditCarForm from '../EditCarForm/EditCarForm';
import DeleteCarForm from '../DeleteCarForm/DeleteCarForm';

import s from './carListItem.module.scss';

const CarListItem = ({ car, updateCar, onDelete }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleSelectChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        if (selectedOption === 'Edit Car Info') {
        setIsEditModalOpen(true);
        } else if (selectedOption === 'Delete Car Info') {
        setIsDeleteModalOpen(true);
        }
    };

    const closeModals = () => {
        setSelectedOption('');
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    const handleDelete = () => {
        onDelete(car.id);
        closeModals();
    };

    return (
        <tr>
            <td className={s.cell}>{car.car}</td>
            <td className={s.cell}>{car.car_model}</td>
            <td className={s.cell}>{car.car_vin}</td>
            <td className={s.cell}>{car.car_color}</td>
            <td className={`${s.cell} ${s.year}`}>{car.car_model_year}</td>
            <td className={s.cell}>{car.price}</td>
            <td className={`${s.cell} ${s.availability}`}>{car.availability.toString()}</td>
            <td className={s.cell}>
                <MySelect
                    defaultValue="Choose Action"
                    options={[
                        { value: 'Edit Car Info', name: 'Edit' },
                        { value: 'Delete Car Info', name: 'Delete' }
                    ]}
                    value={selectedOption}
                    onChange={handleSelectChange}
                />
                <MyModal active={isEditModalOpen} setActive={setIsEditModalOpen}>
                    <EditCarForm car={car} updateCar={updateCar} closeModal={closeModals} />
                </MyModal>
                <MyModal active={isDeleteModalOpen} setActive={setIsDeleteModalOpen}>
                    <DeleteCarForm car={car} onDelete={handleDelete} closeModal={closeModals} />
                </MyModal>
            </td>
        </tr>
    );
};

export default CarListItem;