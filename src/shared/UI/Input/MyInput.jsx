import PropTypes from "prop-types";

const MyInput = ({ onChange, value, type, placeholder, className, readOnly = false }) => {
    return (
        <input className={className} defaultValue={value} type={type} placeholder={placeholder} onChange={onChange} readOnly={readOnly}/>
    );
};

export default MyInput;

// MyInput.propTypes = {
//     onChange: PropTypes.func.isRequired,
//     value: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     className: PropTypes.string,
//     readOnly: PropTypes.bool
// };