import './style.css'
import * as dataLoader from './dataLoader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h2>Asynchronous Functions with Callbacks and Promises</h2>

	<h3>Synchronous Employees</h3>
	${dataLoader.getSynchronousEmployees().map(m => m.firstName).join(', ')}

	<h3>Asynchronous Employees</h3>
	<div class="employees"></div>
`

const employeesElem = document.querySelector<HTMLDivElement>('.employees');
if (employeesElem) {
	employeesElem.innerHTML = "Loading...";
	const employees = await dataLoader.getAsynchronousEmployees();
	employeesElem.innerHTML = employees.map(m => m.firstName).join(', ');
}