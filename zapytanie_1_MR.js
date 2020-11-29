var mapFunction = function(){
	var key = this.sex;
	var value = {
        	count: 1,
	        height: parseFloat(this.height),
		weight: parseFloat(this.weight)
	};        
	emit (key, value);
};
     
var reduceFunction = function (key, values){
	reduceVal = {count: 0, height: 0, weight: 0};
	for (var idx = 0; idx < values.length; idx++) {
	        reduceVal.count += values[idx].count;
	        reduceVal.height += values[idx].height;
	        reduceVal.weight += values[idx].weight;
	       }
	 return reduceVal;
};

var finalizeFunction = function (key, reduceVal){
	reduceVal.weight = reduceVal.weight/reduceVal.count;
	reduceVal.height = reduceVal.height/reduceVal.count;
	    
	return reduceVal;
};

db.people.mapReduce(mapFunction, reduceFunction, {out: "mapreduce", finalize: finalizeFunction})
printjson(db.mapreduce.find({}).toArray())
