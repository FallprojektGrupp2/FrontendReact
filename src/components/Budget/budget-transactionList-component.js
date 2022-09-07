
import React, { useContext } from 'react';
import { Transaction } from './budget-transaction-component';

import { GlobalContext } from '../context-budget/globalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Historia</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}