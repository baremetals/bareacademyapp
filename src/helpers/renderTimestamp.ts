

const renderTimestamp = (date: string) => {
	// render if date is today or yesterday or if it's in the same year as today (e.g. 12/31/2020) with the time
	// otherwise render the date with the year (e.g. 12/31/2019)
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);
	const dateObj = new Date(date);
	const isToday = dateObj.getDate() === today.getDate() && dateObj.getMonth() === today.getMonth() && dateObj.getFullYear() === today.getFullYear();
	const isYesterday = dateObj.getDate() === yesterday.getDate() && dateObj.getMonth() === yesterday.getMonth() && dateObj.getFullYear() === yesterday.getFullYear();
	const isSameYear = dateObj.getFullYear() === today.getFullYear();
	if (isToday)
		return `Today at ${dateObj.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})}`;
	else if (isYesterday) 
		return `Yesterday at ${dateObj.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})}`;
	else if (isSameYear)
		return dateObj.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		});
	return new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		year: isSameYear ? undefined : 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	}).format(dateObj);
}

export default renderTimestamp;