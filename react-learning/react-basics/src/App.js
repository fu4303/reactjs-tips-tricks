import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import React from 'react';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14)
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 3, 28) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 20)
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 4, 1)
	}
];

const App = () => {
	const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevState) => {
			return [ expense, ...prevState ];
		});
	};

	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense onAddExpense={addExpenseHandler} />
			{/* <Expenses expenses={expenses.filter((expense) => expense.date === selectedYear)} /> */}
			<Expenses expenses={expenses} />
		</div>
	);
};

export default App;
