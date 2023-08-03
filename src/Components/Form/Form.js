import styles from "./Form.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const initialUserInput = {
  'current-savings': 10000, 
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10
}

export default function Form() {

  const [userInput, setUserInput] = useState(initialUserInput)

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value
      };
    });
  };

  const submitForm = () => {

  }

  const resetForm = () => {
    setUserInput(initialUserInput)
  }

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler("current-savings", e.target.value)
            }
            value={userInput['current-savings']}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              inputChangeHandler("yearly-contribution", e.target.value)
            }
            value={userInput['yearly-contribution']}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) =>
              inputChangeHandler("expected-return", e.target.value)
            }
            value={userInput['expected-return']}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputChangeHandler("duration", e.target.value)}
            type="number"
            id="duration"
            value={userInput['duration']}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <Button reset={resetForm} />
      </p>
    </form>
  );
}
