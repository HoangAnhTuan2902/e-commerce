function GetRandomDateWithinYears(yearsBack) {
	const currentDate = new Date();
	const startDate = new Date();
	startDate.setFullYear(currentDate.getFullYear() - yearsBack);

	return new Date(
		startDate.getTime() + Math.random() * (currentDate.getTime() - startDate.getTime()),
	);
}

export default GetRandomDateWithinYears;
