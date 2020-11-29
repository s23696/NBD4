printjson(db.people.aggregate({
	$group:{
		_id:"$nationality",
		avgBMI:{$avg:{$divide:[{$toDouble:"$weight"},{$pow:[{$divide:[{$toDouble:"$height"},100]},2]}]}},
		minBMI:{$min:{$divide:[{$toDouble:"$weight"},{$pow:[{$divide:[{$toDouble:"$height"},100]},2]}]}},
		maxBMI:{$max:{$divide:[{$toDouble:"$weight"},{$pow:[{$divide:[{$toDouble:"$height"},100]},2]}]}}
		}}).toArray())
