printjson(db.people.aggregate({
	$match:{
		"nationality":"Poland",
		"sex":"Female"}},
	{$unwind:"$credit"},
	{$group:{
		_id:"$credit.currency",
		avgMoney:{$avg:{$toDouble:"$credit.balance"}},
		sumMoney:{$sum:{$toDouble:"$credit.balance"}}}}).toArray())
	
