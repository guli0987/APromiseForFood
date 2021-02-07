<template>
    <view class="mpvue-picker">
        <view :class="{'pickerMask':showPicker}" @click="maskClick" catchtouchmove="true"></view>
        <view class="mpvue-picker-content " :class="{'mpvue-picker-view-show':showPicker}">
            <view class="mpvue-picker__hd" catchtouchmove="true">
                <view class="mpvue-picker__action" @click="pickerCancel">取消</view>
                <view class="mpvue-picker__action" :style="{color:themeColor}" @click="pickerConfirm">确定</view>
            </view>
            <!-- 单列 -->
            <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange" v-if="mode==='selector' && pickerValueSingleArray.length > 0">
                <block>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueSingleArray" :key="index">{{item.label}}</view>
                    </picker-view-column>
                </block>
            </picker-view>
            <!-- 时间选择器 -->
            <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange" v-if="mode==='timeSelector'">
                <block>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueHour" :key="index">{{item.label}}</view>
                    </picker-view-column>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueMinute" :key="index">{{item.label}}</view>
                    </picker-view-column>
                </block>
            </picker-view>
            <!-- 多列选择 -->
            <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange" v-if="mode==='multiSelector'">
                <block v-for="(n,index) in pickerValueMulArray.length" :key="index">
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index1) in pickerValueMulArray[n]" :key="index1">{{item.label}}</view>
                    </picker-view-column>
                </block>
            </picker-view>
            <!-- 二级联动 -->
            <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChangeMul" v-if="mode==='multiLinkageSelector' && deepLength===2">
                <block>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueMulTwoOne" :key="index">{{item.label}}</view>
                    </picker-view-column>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueMulTwoTwo" :key="index">{{item.label}}</view>
                    </picker-view-column>
                </block>
            </picker-view>
            <!-- 三级联动 -->
            <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChangeMul" v-if="mode==='multiLinkageSelector' && deepLength===3">
                <block>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueMulThreeOne" :key="index">{{item.label}}</view>
                    </picker-view-column>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueMulThreeTwo" :key="index">{{item.label}}</view>
                    </picker-view-column>
                    <picker-view-column>
                        <view class="picker-item" v-for="(item,index) in pickerValueMulThreeThree" :key="index">{{item.label}}</view>
                    </picker-view-column>
                </block>
            </picker-view>
			<!-- 四级联动 -->
			<picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChangeMul" v-if="mode==='multiLinkageSelector' && deepLength===4">
			    <block>
			        <picker-view-column  class="picker-item-t-fa">
			            <view class="picker-item-f" v-for="(item,index) in pickerValueMulFourOne" :key="index">{{item.label}}</view>
			        </picker-view-column>
			        <picker-view-column  class="picker-item-t-fa">
			            <view class="picker-item-t-f" v-for="(item,index) in pickerValueMulFourTwo" :key="index">{{item.label}}</view>
			        </picker-view-column>
			        <picker-view-column  class="picker-item-fa">
			            <view class="picker-item-f" v-for="(item,index) in pickerValueMulFourThree" :key="index">{{item.label}}</view>
			        </picker-view-column>
					<picker-view-column  class="picker-item-fa">
					    <view class="picker-item-f" v-for="(item,index) in pickerValueMulFourFour" :key="index">{{item.label}}</view>
					</picker-view-column>
			    </block>
			</picker-view>
        </view>
    </view>
</template>

<script>
    export default {
		name: "mpvuePickerBest",
        data() {
            return {
                pickerChangeValue: [],
                pickerValue: [],
                pickerValueArrayChange: true,
                modeChange: false,
                pickerValueSingleArray: [],
                pickerValueHour: [],
                pickerValueMinute: [],
                pickerValueMulArray: [],
                pickerValueMulTwoOne: [],
                pickerValueMulTwoTwo: [],
                pickerValueMulThreeOne: [],
                pickerValueMulThreeTwo: [],
                pickerValueMulThreeThree: [],
				//四级联动
				pickerValueMulFourOne: [],
				pickerValueMulFourTwo: [],
				pickerValueMulFourThree: [],
				pickerValueMulFourFour: [],
				/* 是否显示控件 */
				showPicker: false,
            };
        },
        props: {
            /* mode */
            mode: {
                type: String,
                default: 'selector'
            },
            /* picker 数值 */
            pickerValueArray: {
                type: Array,
                default(){
					return []
				}
            },
            /* 默认值 */
            pickerValueDefault: {
                type: Array,
                default(){
                	return []
                }
            },
            /* 几级联动 */
            deepLength: {
                type: Number,
                default: 2
            },
            /* 主题色 */
            themeColor: String
        },
        watch: {
            pickerValueArray(oldVal, newVal) {
                this.pickerValueArrayChange = true;
            },
            mode(oldVal, newVal) {
                this.modeChange = true;
            },
			pickerValueArray(val){
				this.initPicker(val);
			}
        },
        methods: {
            initPicker(valueArray) {
                let pickerValueArray = valueArray;
                this.pickerValue = this.pickerValueDefault;
                // 初始化多级联动
                if (this.mode === 'selector') {
                    this.pickerValueSingleArray = valueArray;
                } else if (this.mode === 'timeSelector') {
                    this.modeChange = false;
                    let hourArray = [];
                    let minuteArray = [];
                    for (let i = 0; i < 24; i++) {
                        hourArray.push({
                            value: i,
                            label: i > 9 ? `${i} 时` : `0${i} 时`
                        });
                    }
                    for (let i = 0; i < 60; i++) {
                        minuteArray.push({
                            value: i,
                            label: i > 9 ? `${i} 分` : `0${i} 分`
                        });
                    }
                    this.pickerValueHour = hourArray;
                    this.pickerValueMinute = minuteArray;
                } else if (this.mode === 'multiSelector') {
                    this.pickerValueMulArray = valueArray;
                } else if (this.mode === 'multiLinkageSelector' && this.deepLength === 2) {
                    // 两级联动
                    let pickerValueMulTwoOne = [];
                    let pickerValueMulTwoTwo = [];
					//alert(pickerValueArray[0].label);
					//alert(pickerValueArray[0].children.length);
                    // 第一列
                    for (let i = 0, length = pickerValueArray.length; i < length; i++) {
                        pickerValueMulTwoOne.push(pickerValueArray[i]);
                    }
                    // 渲染第二列
                    // 如果有设定的默认值
                    if (this.pickerValueDefault.length === 2) {
                        let num = this.pickerValueDefault[0];
                        for (
                            let i = 0, length = pickerValueArray[num].children.length; i < length; i++
                        ) {
                            pickerValueMulTwoTwo.push(pickerValueArray[num].children[i]);
                        }
                    } else {
                        for (
                            let i = 0, length = pickerValueArray[0].children.length; i < length; i++
                        ) {
                            pickerValueMulTwoTwo.push(pickerValueArray[0].children[i]);
                        }
                    }
                    this.pickerValueMulTwoOne = pickerValueMulTwoOne;
                    this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
                } else if (
                    this.mode === 'multiLinkageSelector' &&
                    this.deepLength === 3
                ) {	//三级联动
                    let pickerValueMulThreeOne = [];
                    let pickerValueMulThreeTwo = [];
                    let pickerValueMulThreeThree = [];
                    // 第一列
                    for (let i = 0, length = pickerValueArray.length; i < length; i++) {
                        pickerValueMulThreeOne.push(pickerValueArray[i]);
                    }
                    // 渲染第二列
                    this.pickerValueDefault =
                        this.pickerValueDefault.length === 3 ?
                        this.pickerValueDefault :
                        [0, 0, 0];
                    if (this.pickerValueDefault.length === 3) {
                        let num = this.pickerValueDefault[0];
                        for (
                            let i = 0, length = pickerValueArray[num].children.length; i < length; i++
                        ) {
                            pickerValueMulThreeTwo.push(pickerValueArray[num].children[i]);
                        }
                        // 第三列
                        let numSecond = this.pickerValueDefault[1];
                        for (let i = 0, length = pickerValueArray[num].children[numSecond].children.length; i < length; i++) {
                            pickerValueMulThreeThree.push(
                                pickerValueArray[num].children[numSecond].children[i]
                            );
                        }
                    }
                    this.pickerValueMulThreeOne = pickerValueMulThreeOne;
                    this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
                    this.pickerValueMulThreeThree = pickerValueMulThreeThree;
                }
				else if (
				    this.mode === 'multiLinkageSelector' &&
				    this.deepLength === 4
				) {	//四级联动
					let pickerValueMulFourOne = [];
					let pickerValueMulFourTwo = [];
					let pickerValueMulFourThree = [];
					let pickerValueMulFourFour = [];
					// 第一列
					for (let i = 0, length = pickerValueArray.length; i < length; i++) {
					    pickerValueMulFourOne.push(pickerValueArray[i]);
					}
					// 渲染第二列
					this.pickerValueDefault =
					    this.pickerValueDefault.length === 4 ?
					    this.pickerValueDefault :
					    [0, 0, 0, 0];
					if (this.pickerValueDefault.length === 4) {
					    let num = this.pickerValueDefault[0];
					    for (let i = 0, length = pickerValueArray[num].children.length; i < length; i++) {
					        pickerValueMulFourTwo.push(pickerValueArray[num].children[i]);
							//console.log("三级联动第二列："+JSON.stringify(pickerValueArray[num].children[i]));
					    }
					    // 第三列
					    let numSecond = this.pickerValueDefault[1];
					    for (let i = 0, length = pickerValueArray[num].children[numSecond].children.length; i < length; i++) {
					        pickerValueMulFourThree.push(
					            pickerValueArray[num].children[numSecond].children[i]
					        );
							//console.log("三级联动第三列："+JSON.stringify(pickerValueArray[num].children[numSecond].children[i]));
					    }
						// 第四列
						let numThird = this.pickerValueDefault[2];
						for (let i = 0, length = pickerValueArray[num].children[numSecond].children[numThird].children.length; i < length; i++) {
						    pickerValueMulFourFour.push(
						        pickerValueArray[num].children[numSecond].children[numThird].children[i]
						    );
							//console.log("三级联动第四列："+JSON.stringify(pickerValueArray[num].children[numSecond].children[numThird].children[i]))
						}
					}
					this.pickerValueMulFourOne = pickerValueMulFourOne;
					this.pickerValueMulFourTwo = pickerValueMulFourTwo;
					this.pickerValueMulFourThree = pickerValueMulFourThree;
					this.pickerValueMulFourFour = pickerValueMulFourFour;
						
				
				}
            },
            show() {
                setTimeout(() => {
                    if (this.pickerValueArrayChange || this.modeChange) {
                        this.initPicker(this.pickerValueArray);
                        this.showPicker = true;
                        this.pickerValueArrayChange = false;
                        this.modeChange = false;
                    } else {
                        this.showPicker = true;
                    }
                }, 0);
            },
            maskClick() {
                this.pickerCancel();
            },
            pickerCancel() {
                this.showPicker = false;
                this._initPickerVale();
                let pickObj = {
                    index: this.pickerValue,
                    value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
                    label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
                };
                this.$emit('onCancel', pickObj);
            },
            pickerConfirm(e) {
                this.showPicker = false;
                this._initPickerVale();
                let pickObj = {
                    index: this.pickerValue,
                    value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
                    label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
                };
                this.$emit('onConfirm', pickObj);
            },
            showPickerView() {
                this.showPicker = true;
            },
            pickerChange(e) {
                this.pickerValue = e.mp.detail.value;
                let pickObj = {
                    index: this.pickerValue,
                    value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
                    label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
                };
                this.$emit('onChange', pickObj);
            },
            pickerChangeMul(e) {
                if (this.deepLength === 2) {
                    let pickerValueArray = this.pickerValueArray;
                    let changeValue = e.mp.detail.value;
                    // 处理第一列滚动
                    if (changeValue[0] !== this.pickerValue[0]) {
                        let pickerValueMulTwoTwo = [];
                        // 第一列滚动第二列数据更新
                        for (let i = 0, length = pickerValueArray[changeValue[0]].children.length; i < length; i++) {
                            pickerValueMulTwoTwo.push(pickerValueArray[changeValue[0]].children[i]);
                        }
                        this.pickerValueMulTwoTwo = pickerValueMulTwoTwo;
                        // 第二列初始化为 0
                        changeValue[1] = 0;
                    }
                    this.pickerValue = changeValue;
                } else if (this.deepLength === 3) {
                    let pickerValueArray = this.pickerValueArray;
                    let changeValue = e.mp.detail.value;
                    let pickerValueMulThreeTwo = [];
                    let pickerValueMulThreeThree = [];
                    // 重新渲染第二列
                    // 如果是第一列滚动
                    if (changeValue[0] !== this.pickerValue[0]) {
                        this.pickerValueMulThreeTwo = [];
                        for (let i = 0, length = pickerValueArray[changeValue[0]].children.length; i < length; i++) {
                            pickerValueMulThreeTwo.push(pickerValueArray[changeValue[0]].children[i]);
                        }
                        // 重新渲染第三列
                        for (let i = 0, length = pickerValueArray[changeValue[0]].children[0].children.length; i <
                            length; i++) {
                            pickerValueMulThreeThree.push(pickerValueArray[changeValue[0]].children[0].children[i]);
                        }
                        changeValue[1] = 0;
                        changeValue[2] = 0;
                        this.pickerValueMulThreeTwo = pickerValueMulThreeTwo;
                        this.pickerValueMulThreeThree = pickerValueMulThreeThree;
                    } else if (changeValue[1] !== this.pickerValue[1]) {
                        // 第二列滚动
                        // 重新渲染第三列
                        this.pickerValueMulThreeThree = [];
                        pickerValueMulThreeTwo = this.pickerValueMulThreeTwo;
                        for (let i = 0, length = pickerValueArray[changeValue[0]].children[changeValue[1]].children.length; i <
                            length; i++) {
                            pickerValueMulThreeThree.push(pickerValueArray[changeValue[0]].children[changeValue[1]].children[
                                i]);
                        }
                        changeValue[2] = 0;
                        this.pickerValueMulThreeThree = pickerValueMulThreeThree;
                    }
                    this.pickerValue = changeValue;
                } else if (this.deepLength === 4) {
					console.log("e:"+JSON.stringify(e));
					let pickerValueArray = this.pickerValueArray;
					let changeValue = e.mp.detail.value;//value:{"value":[1,0,0,0]} 改到第一列第二行第二列第一行第三列第一行第四列第一行
					let pickerValueMulFourTwo = [];
					let pickerValueMulFourThree = [];
					let pickerValueMulFourFour = [];
					// 如果是第一列滚动
					if (changeValue[0] !== this.pickerValue[0]) {
						// 重新渲染第二列
					    this.pickerValueMulFourTwo = [];
					    for (let i = 0, length = pickerValueArray[changeValue[0]].children.length; i < length; i++) {
					        pickerValueMulFourTwo.push(pickerValueArray[changeValue[0]].children[i]);
							//console.log("渲染第二列："+JSON.stringify(pickerValueArray[changeValue[0]].children[i]));
					    }
					    // 重新渲染第三列
						this.pickerValueMulFourThree = [];
					    for (let i = 0, length = pickerValueArray[changeValue[0]].children[0].children.length; i <
					        length; i++) {
					        pickerValueMulFourThree.push(pickerValueArray[changeValue[0]].children[0].children[i]);
							//console.log("渲染第三列："+JSON.stringify(pickerValueArray[changeValue[0]].children[0].children[i]));
					    }
						// 重新渲染第四列
						this.pickerValueMulFourFour = [];
						for (let i = 0, length = pickerValueArray[changeValue[0]].children[0].children[0].children.length; i <
						    length; i++) {
						    pickerValueMulFourFour.push(pickerValueArray[changeValue[0]].children[0].children[0].children[i]);
							//console.log("渲染第四列："+JSON.stringify(pickerValueArray[changeValue[0]].children[0].children[0].children[i]));
							
						}
					    changeValue[1] = 0;
					    changeValue[2] = 0;
						changeValue[3] = 0;
					    this.pickerValueMulFourTwo = pickerValueMulFourTwo;
					    this.pickerValueMulFourThree = pickerValueMulFourThree;
						this.pickerValueMulFourFour = pickerValueMulFourFour;
					} else if (changeValue[1] !== this.pickerValue[1]) {
					    // 第二列滚动
					    // 重新渲染第三列
					    this.pickerValueMulFourThree = [];
					    //pickerValueMulThreeTwo = this.pickerValueMulThreeTwo;
						
					    for (let i = 0, length = pickerValueArray[changeValue[0]].children[changeValue[1]].children.length; i <
					        length; i++) {
					        pickerValueMulFourThree.push(pickerValueArray[changeValue[0]].children[changeValue[1]].children[i]);
							//console.log("渲染第三列："+JSON.stringify(pickerValueArray[changeValue[0]].children[changeValue[1]].children[i]));
					    }
						// 重新渲染第四列
						this.pickerValueMulFourFour = [];
						for (let i = 0, length = pickerValueArray[changeValue[0]].children[changeValue[1]].children[0].children.length; i <
						    length; i++) {
						    pickerValueMulFourFour.push(pickerValueArray[changeValue[0]].children[changeValue[1]].children[0].children[i]);
							//console.log("渲染第四列："+JSON.stringify(pickerValueArray[changeValue[0]].children[changeValue[1]].children[0].children[i]));
						}
						
					    changeValue[2] = 0;
						changeValue[3] = 0;
					    this.pickerValueMulFourThree = pickerValueMulFourThree;
						this.pickerValueMulFourFour = pickerValueMulFourFour;
					} else if (changeValue[2] !== this.pickerValue[2]) {
					    // 第三列滚动
						// 重新渲染第四列
						this.pickerValueMulFourFour = [];
						for (let i = 0, length = pickerValueArray[changeValue[0]].children[changeValue[1]].children[changeValue[2]].children.length; i <
						    length; i++) {
						    pickerValueMulFourFour.push(pickerValueArray[changeValue[0]].children[changeValue[1]].children[changeValue[2]].children[i]);
							//console.log("渲染第四列："+JSON.stringify(pickerValueArray[changeValue[0]].children[changeValue[1]].children[changeValue[2]].children[i]));
						}
						this.pickerValueMulFourFour = pickerValueMulFourFour;
					}
					this.pickerValue = changeValue;
				}
                let pickObj = {
                    index: this.pickerValue,
                    value: this._getPickerLabelAndValue(this.pickerValue, this.mode).value,
                    label: this._getPickerLabelAndValue(this.pickerValue, this.mode).label
                };
                this.$emit('onChange', pickObj);
            },
            // 获取 pxikerLabel
            _getPickerLabelAndValue(value, mode) {
                let pickerLable;
                let pickerGetValue = [];
                // selector
                if (mode === 'selector') {
                    pickerLable = this.pickerValueSingleArray[value].label;
                    pickerGetValue.push(this.pickerValueSingleArray[value].value);
                } else if (mode === 'timeSelector') {
                    pickerLable = `${this.pickerValueHour[value[0]].label}-${this.pickerValueMinute[value[1]].label}`;
                    pickerGetValue.push(this.pickerValueHour[value[0]].value);
                    pickerGetValue.push(this.pickerValueHour[value[1]].value);
                } else if (mode === 'multiSelector') {
                    for (let i = 0; i < value.length; i++) {
                        if (i > 0) {
                            pickerLable += this.pickerValueMulArray[i][value[i]].label + (i === value.length - 1 ? '' :
                                '-');
                        } else {
                            pickerLable = this.pickerValueMulArray[i][value[i]].label + '-';
                        }
                        pickerGetValue.push(this.pickerValueMulArray[i][value[i]].value);
                    }
                } else if (mode === 'multiLinkageSelector') {
                    /* eslint-disable indent */
                    pickerLable =
                        this.deepLength === 2 ?
                        `${this.pickerValueMulTwoOne[value[0]].label}-${this.pickerValueMulTwoTwo[value[1]].label}` :
						this.deepLength === 3 ?
                        `${this.pickerValueMulThreeOne[value[0]].label}-${this.pickerValueMulThreeTwo[value[1]].label}-${this.pickerValueMulThreeThree[value[2]].label}` :
						`${this.pickerValueMulFourOne[value[0]].label}-${this.pickerValueMulFourTwo[value[1]].label}-${this.pickerValueMulFourThree[value[2]].label}-${this.pickerValueMulFourFour[value[3]].label}`;
                    if (this.deepLength === 2) {
                        pickerGetValue.push(this.pickerValueMulTwoOne[value[0]].value);
                        pickerGetValue.push(this.pickerValueMulTwoTwo[value[1]].value);
                    } else if(this.deepLength === 3){
                        pickerGetValue.push(this.pickerValueMulThreeOne[value[0]].value);
                        pickerGetValue.push(this.pickerValueMulThreeTwo[value[1]].value);
                        pickerGetValue.push(this.pickerValueMulThreeThree[value[2]].value);
                    } else if(this.deepLength === 4){
						pickerGetValue.push(this.pickerValueMulFourOne[value[0]].value);
						pickerGetValue.push(this.pickerValueMulFourTwo[value[1]].value);
						pickerGetValue.push(this.pickerValueMulFourThree[value[2]].value);
						pickerGetValue.push(this.pickerValueMulFourFour[value[3]].value);
					} else{
						console.log("Error:this.deepLength > 4")
					}
                    /* eslint-enable indent */
                }
                return {
                    label: pickerLable,
                    value: pickerGetValue
                };
            },
            // 初始化 pickerValue 默认值
            _initPickerVale() {
                if (this.pickerValue.length === 0) {
                    if (this.mode === 'selector') {
                        this.pickerValue = [0];
                    } else if (this.mode === 'multiSelector') {
                        this.pickerValue = new Int8Array(this.pickerValueArray.length);
                    } else if (
                        this.mode === 'multiLinkageSelector' &&
                        this.deepLength === 2
                    ) {
                        this.pickerValue = [0, 0];
                    } else if (
                        this.mode === 'multiLinkageSelector' &&
                        this.deepLength === 3
                    ) {
                        this.pickerValue = [0, 0, 0];
                    } else if (
                        this.mode === 'multiLinkageSelector' &&
                        this.deepLength === 4
                    ) {
                        this.pickerValue = [0, 0, 0, 0];
                    }
                }
            }
        }
    };
</script>

<style>
    .pickerMask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
    }

    .mpvue-picker-content {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        transition: all 0.3s ease;
        transform: translateY(100%);
        z-index: 3000;
    }

    .mpvue-picker-view-show {
        transform: translateY(0);
    }

    .mpvue-picker__hd {
        display: flex;
        padding: 9px 15px;
        background-color: #fff;
        position: relative;
        text-align: center;
        font-size: 17px;
    }

    .mpvue-picker__hd:after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid #e5e5e5;
        color: #e5e5e5;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
    }

    .mpvue-picker__action {
        display: block;
        flex: 1;
        color: #1aad19;
    }

    .mpvue-picker__action:first-child {
        text-align: left;
        color: #888;
    }

    .mpvue-picker__action:last-child {
        text-align: right;
    }

    .picker-item {
        text-align: center;
        line-height: 40px;
        font-size: 16px;
    }
	/* 新加 自定义四级联动样式 */
	.picker-item-fa {
		flex-grow: 2;
	}
	.picker-item-t-fa {
		flex-grow: 1;
	}
	.picker-item-f {
	    text-align: center;
	    line-height: 40px;
	    font-size: 16px;
	}
	.picker-item-t-f {
	    text-align: center;
	    line-height: 40px;
	    font-size: 16px;
	}

    .mpvue-picker-view {
        position: relative;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 238px;
        background-color: rgba(255, 255, 255, 1);
    }
</style>
