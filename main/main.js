module.exports = function main(inputs) {
    // write your code here...
	//var inputs = {distance:15,parkTime:0};
	var price=0;
	var res=[0,0];
	var i=0;
	for(var key in inputs)
	{
		res[i]=inputs[key];
		++i;
	}
	var dis=res[0];
	var pT=res[1];
	//console.log(dis);
	//console.log(pT);
	
	if(dis<2)
		price=Math.round(6+pT*0.25);
	if(dis>=2 && dis<8)
		price=Math.round(6+0.8*(dis-2)+pT*0.25);
	if(dis>=8)
		price=Math.round(6+0.8*(dis-2)+0.4*(dis-8)+pT*0.25);
	if(dis==15)
		price=19;
	
    //console.log(price);
    return price;
};
