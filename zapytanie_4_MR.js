var mapFunction = function(){
	var bmi = parseFloat(this.weight)/(Math.pow(parseFloat(this.height),2)/10000);
	var key = this.nationality;
	var value = {
		count:1,
		avgBmi:bmi,
		minBmi:bmi,
		maxBmi:bmi};
	emit(key, value);
};

var reduceFunction = function(key, values){
	reduceVal = {count:0, avgBmi:0, minBmi:999, maxBmi:0};
	for(var idx=0; idx < values.length; idx++){
		reduceVal.avgBmi += values[idx].avgBmi;
		reduceVal.count += values[idx].count;
		reduceVal.minBmi = Math.min(reduceVal.minBmi, values[idx].minBmi);
		reduceVal.maxBmi = Math.max(reduceVal.maxBmi, values[idx].maxBmi);
	};
	return reduceVal
};

var finalizeFunction = function (key, reduceVal){
		reduceVal.avgBmi = reduceVal.avgBmi/reduceVal.count;
		    
		return reduceVal;
};

db.people.mapReduce(mapFunction, reduceFunction, {out: "mapreduce", finalize: finalizeFunction})
printjson(db.mapreduce.find({}).toArray())


