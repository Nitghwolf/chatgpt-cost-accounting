import React from 'react';
import BalanceTable from './components/BalanceTable';
import ExpenseTable from './components/ExpenseTable';
import IncomeTable from './components/IncomeTable';
import Form from './components/Form';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Учет расходов и доходов</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Добавить транзакцию</h2>
          <Form />
        </div>
        <div className="col-md-6">
          <h2>Доходы</h2>
          <IncomeTable />
          <h2 className="mt-5">Расходы</h2>
          <ExpenseTable />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Общая информация</h2>
          <BalanceTable />
        </div>
      </div>
    </div>
  );
};

export default App;