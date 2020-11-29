printjson(db.people.aggregate(
	{$unwind:"$credit"},
	{$group:{
		_id:"$credit.currency",
		"totalMoney":{"$sum":{$toDouble:"$credit.balance"}}}}).toArray())
