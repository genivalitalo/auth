import styles from "./button.module.css";
const Button = ({ children, ...props }) => {
    const variant = props.variant || "primary";
    return ( 
        <button className={styles[variant]} type={props.type || "button"} {...props}>
            {children}
        </button>
     );
}
 
export default Button;