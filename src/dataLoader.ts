import employees from './data/employees.json';
import axios from 'axios';
import { IEmployee } from './interfaces';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousEmployees = (callback: (employees:IEmployee[]) => void) => {
	const url = 'https://edwardtanguay.vercel.app/share/employees.json';
	(async () => {
		const employees = (await axios.get(url)).data;
		callback(employees);
	})();
}