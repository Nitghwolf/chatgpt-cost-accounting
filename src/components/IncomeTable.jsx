import React from 'react';
import useStore from '../store/store';


const IncomeTable = () => {
    const { deleteTransaction } = useStore();

    const transactions = useStore((state) =>
        state.transactions.filter((transaction) => transaction.type === 'income')
    );

    const total = transactions.reduce(
        (total, transaction) => total + Number(transaction.amount),
        0
    );

    const handleDelete = (id) => {
        deleteTransaction(id);
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
                        </tr>
                    ))}
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

export default IncomeTable;