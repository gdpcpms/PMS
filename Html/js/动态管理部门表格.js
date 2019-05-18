// JavaScript Document
//初始化
$(document).ready(function(e) {
	//表格头部固定在顶部
	$(".department_table").scroll(function(){
		var a=$(".department_table").scrollTop();
		if(a>=35){
			$("#department_table_header").removeClass("hide");
			$("#department_table_header").children().width($("#department_table_content").children().children().width())
		}
		else{
			$("#department_table_header").addClass("hide");
		}
	});
	$("#DepartmentID").on("focus",add());
});

//跳转至表格底部的输入行，输入信息后回车增加一行
function add(){
	$(".department_table").scrollTop($("#department_table_content").children().length*38);
	$("#DepartmentID").focus();
	$(document).keydown(function(e){
		var key=e.keyCode;
		if(key==13&&$("#DepartmentID").val()!=" "&&$("#DepartmentID").val()){
			var DepartmentID=$("#DepartmentID").val();
			var DepartmentName=$("#DepartmentName").val();
			var DepartmentBossName=$("#DepartmentBossName").val();
			$("#department_table_content").append('<tr class="department-'+DepartmentID+'"><td >'+DepartmentID+'</td><td >'+DepartmentName+'</td><td>'+DepartmentBossName+'</td></tr>');
			$("#DepartmentID").val("");
			$("#DepartmentID").focus();
			$("#DepartmentName").val("");
			$("#DepartmentBossName").val("");
			//输入后滚动条自动到底部
			$(".department_table").scrollTop($(".department_table").scrollTop()+100);
		}
	})
}

//查找
function lookup(){
	//获取输入的部门号
	var department_text=$("#department_text").val();
	//指定行存在
	if($(".department-"+department_text).length>0){
		//根据输入部门号跳转到指定的行
		var counts=$(".department-"+department_text).prevAll().length;
		$(".department_table").scrollTop((counts-4)*37);
		//指定行文字变红1.5秒
		$(".department-"+department_text).css("color","#fF0000");	
		setTimeout(function(){
			$(".department-"+department_text).css("color","#333");	
		},1500);
		
	}
	//指定行不存在，提示2秒
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
	}
	/*//清空输入框
	$("#department_text").val("");
	$("#department_text").focus();*/
}

//修改
function renew(){
	//获取输入的部门号
	var department_text=$("#department_text").val();
	//指定行存在
	if($(".department-"+department_text).length>0){
		//1.记录原来的信息
		var texts=$(".department-"+department_text).children();
		var DepartmentID=texts.eq(0).text();
		var DepartmentName=texts.eq(1).text();
		var DepartmentBossName=texts.eq(2).text();
		//2.将改行转化为文本框
		$(".department-"+department_text).empty();
		$(".department-"+department_text).append('<td><input type="text" class="form-control" id="renewDepartmentID"></td><td><input type="text" class="form-control" id="renewDepartmentName"></td><td><input type="text" class="form-control" id="renewDepartmentBossName"></td>');
		//3.在文本框中显示原来的信息
		$("#renewDepartmentID").focus();
		$("#renewDepartmentID").val(DepartmentID);
		$("#renewDepartmentName").val(DepartmentName);
		$("#renewDepartmentBossName").val(DepartmentBossName);
		//4.文本框失去焦点时保存修改信息
		var time=setInterval(function(){
			if(!$("#renewDepartmentID").is(":focus")&&!$("#renewDepartmentName").is(":focus")&&!$("#renewDepartmentBossName").is(":focus")){
				var DepartmentID=$("#renewDepartmentID").val();
				var DepartmentName=$("#renewDepartmentName").val();
				var DepartmentBossName=$("#renewDepartmentBossName").val();
				$(".department-"+department_text).empty();
				$(".department-"+department_text).append('<td>'+DepartmentID+'</td><td>'+DepartmentName+'</td><td>'+DepartmentBossName+'</td>');
				clearInterval(time);
				if(DepartmentID!=department_text){
					$(".department-"+department_text).addClass("department-"+DepartmentID);
					$(".department-"+department_text).removeClass("department-"+department_text);
				}
			}
		},200);
		
		
	}
	//指定行不存在
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
		return;
	}
}

//删除
function delect(){
	//获取输入的部门号
	var department_text=$("#department_text").val();
	//指定行存在
	if($(".department-"+department_text).length>0){
		//根据输入部门号跳转到指定的行，指定行文字变红
		var counts=$(".department-"+department_text).prevAll().length;
		$(".department_table").scrollTop((counts-4)*37);
		$(".department-"+department_text).css("color","#fF0000");	
		//弹出框提问是否删除
		setTimeout(function(){
			if(confirm("是否确定删除")){
				$(".department-"+department_text).remove();
			}
			else{
				$(".department-"+department_text).css("color","#333");	
			}
		},500);
	}
	//指定行不存在
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
		return;
	}
}
	
