var mapFunction = function(){
	this.credit.forEach(function(credit){
	emit(credit.currency, parseFloat(credit.balance))})
};

var reduceFunction = function(key, values){
	return Array.sum(values);
};

db.people.mapReduce(mapFunction, reduceFunction, {out: "mapreduce"})
printjson(db.mapreduce.find({}).toArray())
