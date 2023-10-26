import employees from './data/employees.json';
import axios from 'axios';
import { IEmployee } from './interfaces';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousEmployees = async () => {
	return new Promise<IEmployee[]>((resolve) => {
		(async () => {
			const employees = (await axios.get(url)).data;
			resolve(employees);
		})();
	})
}