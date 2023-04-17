import React, { useState } from 'react';
import useStore from '../store/store';
import EditTransactionForm from './EditTransactionForm';


const ExpenseTable = () => {
  const { deleteTransaction } = useStore();
  const [editing, setEditing] = useState(false);
  const [transaction, setTransaction] = useState();


  const transactions = useStore((state) =>
    state.transactions.filter((transaction) => transaction.type === 'expense')
  );

  const total = transactions.reduce(
    (total, transaction) => total + Number(transaction.amount),
    0
  );

  const handleDelete = (id) => {
    deleteTransaction(id);
  };

  const handleEdit = (tr) => {
    setEditing(true);
    setTransaction(tr);
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Описание</th>
            <th scope="col">Сумма</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <button onClick={() => handleDelete(transaction.id)} className="btn btn-danger">
                Delete
              </button>
              <button className="btn btn-primary" onClick={() => handleEdit(transaction)}>
                Edit
              </button>
            </tr>
          ))}
          {editing && (
            <EditTransactionForm
              transaction={transaction}
              setEditing={setEditing}
            />
          )}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row" colSpan="2">
              Итого:
            </th>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTable;
