var mapFunction = function(){
	var key = this.job;
	var value = null;
	emit(key, value)};

var reduceFunction = function(key, values){
	return Array.sum(values);
};

db.people.mapReduce(mapFunction, reduceFunction, {out: "mapreduce"})
printjson(db.mapreduce.find({}).toArray())
