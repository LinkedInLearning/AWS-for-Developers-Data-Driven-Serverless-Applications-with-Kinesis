'use strict';

exports.handler = async (event) => {
	/*
    [ { partitionKey: '2391027090', data: { Type: 'analytics', data: 'Hello world' } } ]
     */
	console.log(event);

	let result = [];

	event.forEach((record) => {
		//Here you can manipulate the record as you wish
		let modifiedRecord = record;
		modifiedRecord.data.newData = 'Enriched data';

		result.push(modifiedRecord);
	});

	console.log(result);

	return result;
};
