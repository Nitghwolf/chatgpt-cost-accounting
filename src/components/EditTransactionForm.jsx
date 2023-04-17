import React, { useState } from "react";
import useStore from "../store/store";
import Modal from 'react-bootstrap/Modal';

const EditTransactionForm = ({ transaction, setEditing }) => {
    const { editTransaction } = useStore();
    const [description, setDescription] = useState(transaction.description);
    const [amount, setAmount] = useState(transaction.amount);

    const [show, setShow] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedTransaction = { ...transaction, description, amount: +amount };
        editTransaction(updatedTransaction);
        setShow(false);
        setEditing(false);
    };

    const handleCancel = () => {
        setShow(false);
        setEditing(false);
    };


    return (
        <Modal show={show} onHide={handleCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary mr-2">
                            Update
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default EditTransactionForm;
