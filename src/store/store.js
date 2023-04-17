import create from 'zustand';

const useStore = create((set) => ({
    transactions: [],
    addTransaction: (transaction) =>
        set((state) => ({ transactions: [...state.transactions, transaction] })),
    deleteTransaction: (id) => {
        set((state) => {
            const deletedTransaction = state.transactions.find((t) => t.id === id);
            const newTransactions = state.transactions.filter((t) => t.id !== id);
            const newBalance =
                state.balance - (deletedTransaction.type === "income" ? 1 : -1) * deletedTransaction.amount;
            return { transactions: newTransactions, balance: newBalance };
        });
    },
}));

export default useStore;
