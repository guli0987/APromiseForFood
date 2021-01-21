'use strict';
const {
	tabName_s
} = require('./swiper');
const {
	tabName_p
} = require('./picker');
const {
	tabName_t
} = require('./tag');
const {
	tabName_n
} = require('./notice');
const db=uniCloud.database();
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//alert(event);
	console.log('event : ', event+"——"+event.operation)
	var collection;
	var res;
	switch(event.operation){
		case 'getSwiper':
			collection = db.collection(tabName_s);
			res = await collection.limit(3).get(); 
			break;
		case 'getPicker':
			collection = db.collection(tabName_p); 
			res = await collection.limit(3).get(); 
			break;
		case 'getTag':
			collection = db.collection(tabName_t);
			res = await collection.limit(4).get(); 
			break;
		case 'getNotice':
			collection = db.collection(tabName_n);
			res = await collection.limit(1).get(); 
			break;
		default:
			console.log("default");
			break;
	}
	//返回数据给客户端
	return res;
};
