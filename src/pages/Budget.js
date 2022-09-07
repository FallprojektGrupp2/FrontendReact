
import React from 'react';
import{Balance} from "../components/Budget/budget-balance-component"
import {IncomeExpenses} from "../components/Budget/budget-expences-component"
import {TransactionList} from '../components/Budget/budget-transactionList-component'
import{AddTransaction} from '../components/Budget/budget-add-transaction-component'
import{GlobalProvider} from '../components/context-budget/globalState'


const Budgetss = () => {  return (
    <GlobalProvider>
    <div className="container">
     <Balance/>
     <IncomeExpenses/>
     <TransactionList/>
     <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default Budgetss




// import { CreateBudget } from "../components/Budget/create-budget-function-component";
// import { ListBudget } from "../components/Budget/list-budget-component";


// const Budgetss = () => {
//     return (
//         <div>
//             </>
//             <ListBudget/>

//         </div>
//     )
// };

// export default Budgetss