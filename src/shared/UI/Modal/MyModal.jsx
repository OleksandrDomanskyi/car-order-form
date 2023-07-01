import s from './myModal.module.scss';

const MyModal = ({ active, setActive, children }) => {

    return (
        <div className={`${s.modal} ${active ? s.active : ""}`} onClick={() => setActive(false)}>
            <div className={`${s.modalContent} ${active ? s.active : ""}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;