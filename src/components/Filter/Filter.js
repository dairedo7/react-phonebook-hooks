import styles from './Filter.module.css';

export default function Filter({ filter, handleChange }) {
  return (
    <>
      <p className={styles.filter__title}>Find contacts by name</p>
      <input
        className={styles.filter__field}
        type="text"
        name="name"
        value={filter}
        placeholder="Enter the name..."
        onChange={handleChange}
      />
    </>
  );
}
