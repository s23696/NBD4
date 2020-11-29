var mapFunction = function(){
	this.credit.forEach(function(credit){
		emit(credit.currency, {allBalance: parseFloat(credit.balance), count: 1})})};

var reduceFunction = function(key, values){
	reduceVal = {allBalance: 0, count: 0}
	for (var idx = 0; idx < values.length;idx++){
		reduceVal.allBalance += values[idx].allBalance;
		reduceVal.count += values[idx].count;
	}
	return reduceVal;
};

var finalizeFunction = function (key, reduceVal){
		reduceVal.avgBalance = reduceVal.allBalance/reduceVal.count;
		    
		return reduceVal;
};

db.people.mapReduce(mapFunction, reduceFunction, {out: "mapreduce", query: {"sex":"Female","nationality":"Poland"},finalize: finalizeFunction})
printjson(db.mapreduce.find({}).toArray())
