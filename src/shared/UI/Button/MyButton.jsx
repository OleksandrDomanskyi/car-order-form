import PropTypes from "prop-types";

const MyButton = ({ onClickBtn, btnText, type, className }) => {
    return (
        <button className={className} type={type} onClick={onClickBtn}>
            {btnText}
        </button>
    );
};

export default MyButton;

MyButton.propTypes = {
    className: PropTypes.string,
    onClickBtn: PropTypes.func,
    btnText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
};