export const getRandomNumber = (upperLimit: number) => {
	const random = Math.random();
	const randomNumber = Math.floor(random * upperLimit) + 1;
	return randomNumber;
};