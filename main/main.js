module.exports = function main(inputs) {
    // write your code here...
	var price=0;
	var dis=inputs[distance];
	var pT=inputs[parkTime];
	
	if(dis<2)
		price=Math.round(6+pT*0.25);
	if(dis>=2 && dis<8)
		price=Math.round(6+0.8*(dis-2)+pT*0.25);
	if(dis>=8)
		price=Math.round(6++0.8*6+0.4*(dis-8)+pT*0.25);
	
    return price;
};
