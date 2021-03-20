export default {
    state: {
        cache_position:{}//用户定位
    },
    getters: {

    },
    mutations: {
		setCachePosition(state,position){
			state.cache_position=position.val;
			uni.setStorageSync('apff_cache_position', state.cache_position);
			//console.log("cache.js "+JSON.stringify(state.cache_position));
		}
    },
    actions: { 
		async updateCachePosition({commit},params){
			commit('setCachePosition', {
					val: params
				})
		}
    }
}