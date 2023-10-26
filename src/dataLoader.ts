import employees from './data/employees.json';
import axios from 'axios';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousEmployees = () => {
	const url = 'https://edwardtanguay.vercel.app/share/employees.json';
	(async () => {
		const employees = (await axios.get(url)).data;
		console.log('dataLoader', employees);
		return employees;
	})();
}