const calculator = {
    temp: 0,
    value: function(val){
        this.temp = val;
        return this;
    },
    add: function(val){
        this.temp += val;
        return this;
    },
    substract: function(val){
        this.temp -= val;
        return this;
    },
    print: function(){
        console.log(this.temp);
    }
};

calculator
	.value(5)
	.add(5)
	.add(3)
	.substract(3)
	.print();
