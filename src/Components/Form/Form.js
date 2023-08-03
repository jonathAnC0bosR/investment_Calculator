import styles from './Form.module.css'
import Button from '../UI/Button';
import { useState } from 'react';

export default function Form() {

  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [expectedInterest, setexpectedSavings] = useState('');
  const [investmentDuration, setInvestmentDuration] = useState('');

  const handleChangeCurrentSavings = (e) => {
    setCurrentSavings(e.target.value)
  }

  return (
    <form className={styles.form}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={handleChangeCurrentSavings} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className={styles.actions}>
        <Button />
      </p>
    </form>
  );
}
