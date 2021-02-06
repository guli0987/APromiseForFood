/**  
 * 缓存数据优化  
 * import cache from '@/common/js/cache'  
 * 使用方法 【  
 *     一、设置缓存  
 *         string    cache.put('k', 'string你好啊');  
 *         json      cache.put('k', { "b": "3" }, 2);  
 *         array     cache.put('k', [1, 2, 3]);  
 *         boolean   cache.put('k', true);  
 *     二、读取缓存  
 *         默认值    cache.get('k')  
 *         string    cache.get('k', '你好')  
 *         json      cache.get('k', { "a": "1" })  
 *     三、移除/清理    
 *         移除: cache.remove('k');  
 *         清理：cache.clear();   
 * 】  
 * @type {String}  
 */  
const postfix = '_apffapp'; // 缓存前缀   
/**  
 * 设置缓存   同步
 * @param  {[type]} k [键名]  
 * @param  {[type]} v [键值]  
 * @param  {[type]} t [时间、单位秒]  
 */  
function putSync(k, v, t) {  
    uni.setStorageSync(k, v)   
    let seconds = parseInt(t);  
    if (seconds > 0) {  
        let timestamp = Date.parse(new Date());  
        timestamp = timestamp / 1000 + seconds;  
        uni.setStorageSync(k + postfix, timestamp + "")  
    } else {  
        uni.removeStorageSync(k + postfix)  
    }  
}  

/**  
 * 获取缓存   同步
 * @param  {[type]} k   [键名]  
 * @param  {[type]} def [获取为空时默认]  
 */  
function getSync(k, def) {  
    let deadtime = parseInt(uni.getStorageSync(k + postfix))   
    if (deadtime) {  
        if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {  
            if (def) {  
                return def;  
            } else {  
                return false;  
            }  
        }  
    }  
    let res = uni.getStorageSync(k);  
    if (res) {  
        return res;  
    } else {  
        if (def == undefined  || def == "") {  
            def = false;   
        }  
        return def;  
    }  
}  

function getInfoSync(){
	const res = uni.getStorageInfoSync();
}



function removeSync(k) {  
    uni.removeStorageSync(k);  
    uni.removeStorageSync(k + postfix);  
}  

function clearStorageSync(){
	uni.clearStorageSync();
}

/*  success	Function	是	接口调用的回调函数，详见返回参数说明
	fail	Function	否	接口调用失败的回调函数
	complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行） */
/**  
 * 设置缓存   异步 
 * @param  {[type]} k [键名]  
 * @param  {[type]} v [键值]  
 * @param  {[type]} t [时间、单位秒]  
 */  
function put(k, v, t) {  
    uni.setStorage(k,v);
    let seconds = parseInt(t);  
    if (seconds > 0) {  
        let timestamp = Date.parse(new Date());  //timestamp 时间戳
        timestamp = timestamp / 1000 + seconds;  
        uni.setStorage(k + postfix,timestamp + "");  
    } else {  
        uni.removeStorage(k + postfix)  
    }  
}  

/**  
 * 获取缓存   异步
 * @param  {[type]} k   [键名]  
 * @param  {[type]} def [获取为空时默认]  
 */  
function get(k, def) {  
    let deadtime = parseInt(uni.getStorage(k + postfix))   
    if (deadtime) {  
        if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {  
            if (def) {  
                return def;  
            } else {  
                return false;  
            }  
        }  
    }  
    let res = uni.getStorage(k);  
    if (res) {  
        return res;  
    } else {  
        if (def == undefined  || def == "") {  
            def = false;   
        }  
        return def;  
    }  
}  

function getInfo(){
	const res = uni.getStorageInfo();
}


function remove(k) {  
    uni.removeStorage(k);  
    uni.removeStorage(k + postfix);  
}  

function clearStorage(){
	uni.clearStorage();
}

export default {
	put,
	get, 
	getInfo,
	remove, 
	clearStorage,
	putSync,
	getSync, 
	getInfoSync,
	removeSync,
	clearStorageSync
}
