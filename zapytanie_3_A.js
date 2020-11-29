printjson(db.people.aggregate({
	$group:{
		_id:null,
		job: { $addToSet: "$job"}}}).toArray())
		
