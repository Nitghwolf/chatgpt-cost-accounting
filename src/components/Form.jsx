import React, { useState } from 'react';
import useStore from '../store/store';
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [description, setDescription] = useState('');

  const addTransaction = useStore((state) => state.addTransaction);

  const handleSubmit = (event) => {
    event.preventDefault();
    const transaction = { id: uuidv4(), amount, type, description };
    addTransaction(transaction);
    setAmount('');
    setDescription('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="amount">Сумма</label>
        <input
          type="number"
          className="form-control"
          id="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="income"
            value="income"
            checked={type === 'income'}
            onChange={(event) => setType(event.target.value)}
          />
          <label className="form-check-label" htmlFor="income">
            Доход
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id="expense"
            value="expense"
            checked={type === 'expense'}
            onChange={(event) => setType(event.target.value)}
          />
          <label className="form-check-label" htmlFor="expense">
            Расход
          </label>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="description">Описание</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-form">
        Добавить
      </button>
    </form>
  );
};

export default Form;
