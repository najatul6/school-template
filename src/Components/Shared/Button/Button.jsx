
const Button = ({text,icon,className}) => {
  return (
    <button className={`${className} flex justify-center items-center gap-2 px-5 py-3`}>
     {text} {icon}
    </button>
  )
}

export default Button