/**
 * Created by Administrator on 2018/5/14.
 */

// 文本对象
var Txt = {

  // 封装了一个设置标签间文本内容的函数
  getText:function (ele){
    // 能力检测:就是要看当前的浏览器是否支持此标签对象的属性或是方法
    if(typeof ele.innerText == 'string'){  // if小括号 里面的判断条件 一般是boolean类型的值或是关系表达式或是逻辑 表达式
      return ele.innerText
    }else {  // 低版本的火狐 浏览器  textContent
      return ele.textContent
    }
  },

  // 封装了一个获得标签间文本内容的函数
  setText:function (ele,value){
    if(typeof ele.innerText == 'string'){
      ele.innerText = value
    }else {   // 火狐 浏览器的方式来设置
      ele.textContent = value
    }
  }

}

// 标签对象
var ele = {

  // 封装了一个兼容的获取下一个兄弟标签的函数
  getNextElement:function (ele){
    if(ele.nextElementSibling) { //谷歌或是火狐 或是高版本的IE浏览器支持的方式
      return ele.nextElementSibling  // 将获取到的下一个标签节点返回
    }else { // 低版本的IE浏览器    nextSibling
      ele = ele.nextSibling   // 获取当前标签的下一个节点
      while(ele&&ele.nodeType !=1){  // 判断一下当前的节点是否存在以及节点类型是什么
        ele = ele.nextSibling   // 在当前的节点基础上再次获取下一个节点
      }
      return ele    // 将找到的节点返回
    }
  },

  // 封装了一个兼容的获取上一个兄弟标签的函数
  getPrevElement:function (ele){
    if(ele&&ele.previousElementSibling) { // 标准的浏览器支持的方式 谷歌  火狐   高版本的IE浏览器
      return ele.previousElementSibling
    }else {
      ele = ele.previousSibling
      while(ele&&ele.nodeType!=1){
        ele = ele.previousSibling  // 在当前的节点的基础上，继承向前获取节点
      }
      return ele
    }
  },

  // 获得当前标签下面的第一个子标签节点的函数
  getFirstChild:function (ele){
    if(ele && ele.firstElementChild){  //标准浏览器支持的方式
      return ele.firstElementChild
    }else {
      ele = ele.firstChild   //先获取一下第一个子节点
      while(ele&&ele.nodeType!=1){
        ele = ele.nextSibling
      }
      return ele
    }
  },

  // 获得当前标签下面的最后一个子标签节点的函数
  getLastChild:function (ele){
    if(ele && ele.lastElementChild){
      return ele.lastElementChild
    }else {
      if(ele){
        ele = ele.lastChild    // 先获取一下最后一个节点
        while(ele && ele.nodeType !=1){
          ele = ele.previousSibling
        }
        return ele
      }
    }
  }


}




function animate(demo, json,fn) {
  // 用缓动的方式向目标位置移动，步长先大后小， 让两者之间的距离不断的进行一个固定的等分
  clearInterval(demo.timeId)  // 变量和对象的属性用途是一样的，都是用来存储数据的
  demo.timeId = setInterval(function () {
    var flag = true  // 默认是true
    for (var key in json) {
      if(key=='opacity'){
        // 因为opacity是小数，不太好计算,最好的方式可以先将他们都扩大100倍
        var leader = parseInt(getStyle(demo, key)*100) || 0  // 获得元素当前的属性值  top  left  width  height 都可以
        var target = json[key]*100   // 获取目标值，也要扩大100倍
//          var step = Math.ceil((target-leader)/10)
        step = (target - leader) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        leader = leader + step   // 在当前的位置上去加一个步长
//          demo.style.left= leader + 'px'  // 将新值重新设置到元素上
        demo.style[key] = leader/100 // 将新值重新设置到元素上
      }else if(key =='zIndex') {
        var leader = parseInt(getStyle(demo, key)) || 0  // 获得元素当前的属性值  top  left  width  height 都可以
        var target = json[key]   // 获取目标值  target一定不能省略
        demo.style[key] = target   // 将新值重新设置到元素上
      }else {  // width  height  left  top
        var leader = parseInt(getStyle(demo, key)) || 0  // 获得元素当前的属性值  top  left  width  height 都可以
        var target = json[key]   // 获取目标值
//          var step = Math.ceil((target-leader)/10)
        step = (target - leader) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        leader = leader + step   // 在当前的位置上去加一个步长
//          demo.style.left= leader + 'px'  // 将新值重新设置到元素上
        demo.style[key] = leader + 'px'  // 将新值重新设置到元素上
      }

      console.log(leader);
      if (leader != target) {  //  判断是否到达了目标位置
        // 只要有一个属性没有到达目标位置，leader != target这个表达式就会成立,flag的值就是false
        // 如果所有的属性都到达了目标位置，leader != target这个表达式就不会成立,这里面的代码不会执行,则flag为true
        flag = false
      }
    }
    // 如果当前的值和目标值相等了,说明已经到达了目标位置,需要清除定时器
    if (flag) {
      // 根据flag来判断是否清除定时器
      clearInterval(demo.timeId)  //清掉定时器，意味着所有的属性都到达了目标位置
      if(typeof  fn =='function'){
        fn()
      }
    }
  }, 15)
}

/**
 * 封装了一个获取元素指定属性的函数
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
  // 能力检测：就是要看当前的浏览器是否支持此对象的属性或方法
  if (obj.currentStyle) {
    return obj.currentStyle[attr]
  } else {  // 谷歌 或是火狐 支持的方式
    return window.getComputedStyle(obj, false)[attr]
  }
}

/**
 * 封装了一个获取浏览器被页面卷去的高度或左侧距离 的函数
 * @returns {{scrollTop: (Number|number), scrollLeft: (Number|number)}}
 */
function scroll(){
  return {
    scrollTop:window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    scrollLeft:window.pageXOffset || document.documentElement.scrollLeft ||document.body.scrollLeft || 0
  }
}

/**
 * 封装了一个获取浏览器可视区宽度和高度的方法
 * @returns {{clientWidth: (Number|number), clientHeight: (Number|number)}}
 */
function client(){
  return  {
    clientWidth:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
    clientHeight:window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight || 0
  }
}

/**
 * 封装了一个兼容版本的获取元素到页面的距离的函数
 * @param event
 * @returns {{pageX: *, pageY: *}}
 */
function page(event){
  return {
    pageX:event.pageX || event.clientX + document.documentElement.scrollLeft,
    pageY:event.pageY || event.clientY + document.documentElement.scrollTop
  }
}
