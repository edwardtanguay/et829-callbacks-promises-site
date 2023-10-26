import './style.css'
import * as dataLoader from './dataLoader';

const employees = await dataLoader.getAsynchronousEmployees();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h2>Asynchronous Functions with Callbacks and Promises</h2>

	<h3>Synchronous Employees</h3>
	${dataLoader.getSynchronousEmployees().map(m => m.firstName).join(', ')}

	<h3>Asynchronous Employees</h3>
	${employees.map(m => m.firstName).join(', ')}
`