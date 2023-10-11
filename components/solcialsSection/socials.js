import styles from './socials.module.scss'

function Socials() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.mainTitle}>ⓒ2023 Odama. All right reserved</p>
      <div className={styles.navigationBar}>
        <p className={styles.navigationLink}>Instagram</p>
        <p className={styles.navigationLink}>Twitter</p>
        <p className={styles.navigationLink}>Facebook</p>
        <p className={styles.navigationLink}>Youtube</p>
      </div>
    </div>
  );
}

export default Socials;