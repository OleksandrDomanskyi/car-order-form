const MyInput = ({ onChange, value, type, placeholder, className, readOnly = false }) => {
    return (
        <input className={className} defaultValue={value} type={type} placeholder={placeholder} onChange={onChange} readOnly={readOnly}/>
    );
};

export default MyInput;