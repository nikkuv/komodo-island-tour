import styles from "./pricingcard.module.scss";

const itinerarySteps = [
  "Day 1: Arrival in Labuan Bajo",
  "Day 2: Visit Komodo Island and see the Komodo dragons, Pink Beach for swimming & snorkeling",
  "Day 3: Visit Rinca Island and see the Komodo dragons, and go to Kanawa Island for swimming and  snorkeling",
  "Day 4: Departure from Labuan Bajo",
];

function PackageComponent() {
  return (
    <div className={styles.pricingSection}>
      <div className={styles.pricingContainer}>
        {Array.from({length : 3}).map((card, index) => (
          <div key={index} className={styles.cardSection}>
            <div className={styles.pricingCard}>
              <div className={styles.package1Container}>
                <p className={styles.packageTitle}>Package 1</p>
              </div>
              <div className={styles.itineraryContainer}>
                <div className={styles.itineraryContainer1}>
                  {itinerarySteps.map((data, index) => {
                    return (
                      <p
                        key={index}
                        className={`${styles.navigationLink} ${styles.itineraryStep}`}
                      >
                        {data}
                      </p>
                    );
                  })}
                </div>
                <div className={styles.bookingCardBtn}>
                  <p className={styles.bookNowPrice}>Book Now</p>
                  <p className={styles.bookNowPrice}>$600</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PackageComponent;
