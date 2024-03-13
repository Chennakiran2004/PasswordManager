import './index.css'

const PasswordInput = ({
  imgSrc,
  altText,
  value,
  type,
  placeholder,
  onChange,
  name,
}) => (
  <div className="input-element-container">
    <img src={imgSrc} className="input-image" alt={altText} />
    <input
      className="input-element"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      required
    />
  </div>
)

export default PasswordInput
