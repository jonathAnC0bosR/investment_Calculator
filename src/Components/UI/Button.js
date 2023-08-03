import styles from './Button.module.css'

export default function Button(props) {
  return (
    <>
      <button onClick={props.reset} type="reset" className={styles.buttonAlt}>
        Reset
      </button>
      <button type="submit" className={styles.button}>
        Calculate
      </button>
    </>
  );
}
