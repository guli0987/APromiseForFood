'use strict';

//
const db=uniCloud.database("apff");
	
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//console.log('event : ', event)
	const collection = db.collection('unicloud-test') // 获取表'unicloud-test'的集合对象
	const res = await collection.limit(10).get() // 获取表中的10条数据，结果为json格式
	return res // 返回json给客户端
	//返回数据给客户端
	//return event
};
