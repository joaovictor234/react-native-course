import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/Output';
import { ExpensesContext } from '../store/context/expenses-context';

function AllExpenses() {
  const { expenses } = useContext(ExpensesContext);

  return <ExpensesOutput
    expensesPeriod="Total"
    expenses={expenses}
    fallbackText="No expenses found"
  />;
}

export default AllExpenses;