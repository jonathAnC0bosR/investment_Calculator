import styles from './Button.module.css'

export default function Button() {
  return (
    <>
      <button type="reset" className={styles.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </>
  );
}
