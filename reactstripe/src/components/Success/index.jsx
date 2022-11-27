import styles from './Success.module.css'

function Success() {
    return(
        <div className={styles.container}>
            <span className={styles.title}>Succesfull.</span>
            <p className={styles.text}>Your order is being prepared. Thanks for choosing Victor Shop.</p>
        </div>
    )
}

export default Success