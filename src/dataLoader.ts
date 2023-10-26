import employees from './data/employees.json';
import axios from 'axios';
import { IEmployee } from './interfaces';
import * as tools from './tools';

const url = 'https://edwardtanguay.vercel.app/share/employees.json';

export const getSynchronousEmployees = () => {
	return employees;
}

export const getAsynchronousEmployees = () => {
	return new Promise<IEmployee[]>((resolve, reject) => {
		setTimeout(async () => {
			const rand = tools.getRandomNumber(5);
			switch (rand) {
				case 1:
					reject({
						message: 'Network Error'
					})
					break;
				case 2:
					reject({
						message: 'Overload of Resources Error'
					})
					break;
				default:
					const employees = (await axios.get(url)).data;
					resolve(employees);
			}
		}, 2000);
	})
}