'use strict';

//
const db=uniCloud.database();//apff
//event为客户端上传的参数
//context包含了调用信息和运行状态，每次调用的上下文
exports.main = async (event, context) => {
	//console.log('event : ', event)
	const collection = db.collection('apff-swiper_info'); // 获取表'unicloud-test'的集合对象
	const res = await collection.limit(3).get(); // 获取表中的10条数据，结果为json格式
	return res; // 返回json给客户端
	//返回数据给客户端
	//return event
};
