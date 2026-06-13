import styles from './Button.module.css'

export default function Button({ variant = 'primary'} :  any){

    return (<>
    
    <button className={variant === 'primary' ? styles.primary : styles.secondry}>
        click me
    </button>
    </>)
}