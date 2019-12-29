boxsmo.onmousedown = function(e)
{
	//box.event
	var b_e = e;
	console.dir(e);

	//获取鼠标的位置
	document.onmousemove = function(e){
		console.dir(e);

		// 设置 div位置
		// clientX根据整个浏览器来计算
		//offsetX/Y  根据元素的左上角来计算鼠标的位置
		boxsmo.style.left = e.clientX - b_e.offsetX + 'px';
		boxsmo.style.top = e.clientY - b_e.offsetY + 'px';

	}
}

	// 鼠标弹起（松开）停止，不动（放下）
	boxsmo.onmouseup = function(){
		//取消事件
		document.onmousemove = null;
	}