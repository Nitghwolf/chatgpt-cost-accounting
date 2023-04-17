import React, { useState } from "react";
import useStore from "../store/store";

const EditTransactionForm = ({ transaction, setEditing }) => {
    const { editTransaction } = useStore();
    const [description, setDescription] = useState(transaction.text);
    const [amount, setAmount] = useState(transaction.amount);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const updatedTransaction = { ...transaction, description, amount: +amount };
      editTransaction(updatedTransaction);
      setEditing(false);
    };
  
    const handleCancel = () => {
      setEditing(false);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            className="form-control"
            id="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">
          Update
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    );
  };
  
  export default EditTransactionForm;
  