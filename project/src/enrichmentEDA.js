'use strict';

exports.handler = async (event) => {
	/*
	[ { data: { Type: 'EDA', data: 'Hello world', date: '10/2/2023 11:23:28AM' } } ]
     */
	console.log(event);

	let result = [];

	event.forEach((record) => {
		let modifiedRecord = record;
		modifiedRecord.data.date = new Date(modifiedRecord.data.date).getTime();
		result.push(modifiedRecord);
	});

	console.log(result);

	return result;
};
