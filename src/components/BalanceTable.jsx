import React from 'react';
import useStore from '../store/store';


const BalanceTable = () => {
  const transactions = useStore((state) => state.transactions);

  const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + Number(transaction.amount), 0);

  const difference = income - expenses;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Тип</th>
            <th scope="col">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Доходы</td>
            <td>{income}</td>
          </tr>
          <tr>
            <td>Расходы</td>
            <td>{expenses}</td>
          </tr>
          <tr>
            <td>Разница</td>
            <td>{difference}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BalanceTable;
