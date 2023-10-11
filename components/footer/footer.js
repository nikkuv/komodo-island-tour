import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.mainTitle}>Komodone</p>
      <div className={styles.navigationBar}>
        <p className={styles.navigationLink}>About</p>
        <p className={styles.navigationLink}>Packages</p>
        <p className={styles.navigationLink}>Tour guides</p>
        <p className={styles.navigationLink}>Blogs</p>
      </div>
    </div>
  );
}
export default Footer;