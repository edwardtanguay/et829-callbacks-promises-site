import './style.css'
import * as dataLoader from './dataLoader';
import * as appLoader from './appLoader';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
	<h2>Asynchronous Functions with Callbacks and Promises</h2>

	<h3>Synchronous Employees</h3>
	${dataLoader.getSynchronousEmployees().map(m => m.firstName).join(', ')}

	<h3>Asynchronous Employees</h3>
	<div class="employees"></div>
`

appLoader.loadEmployees('.employees');