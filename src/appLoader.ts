import * as dataLoader from './dataLoader';

export const loadEmployees = (elemIdentifier: string) => {
	(async () => {
		const employeesElem = document.querySelector<HTMLDivElement>(elemIdentifier);
		if (employeesElem) {
			employeesElem.innerHTML = "Loading...";
			try {
				const employees = await dataLoader.getAsynchronousEmployees();
				employeesElem.innerHTML = employees.map(m => m.firstName).join(', ');
			}
			catch(error:any) {
				employeesElem.innerHTML = `<span class="error">${error.message}</span>`;
			}
		}
	})();
}