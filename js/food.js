// window.onload = function() {
function myFunction(){
  $("#tableId").show();
}
$(function(){
// $("#tableId").hide();
var imgId = $("#img1");
// init(imgId,1);

var week = new Date().getDay();
$('#upload_excel').change(function(e) {



  var footVal = parseInt($("#selectVal").val());//测试默认当天早餐
  $("#selectVal").hide();
  //获取当前的年月日
  var date = new Date();
  var year = date .getFullYear(); //获取完整的年份(4位)
  var month = date .getMonth(); //获取当前月份(0-11,0代表1月)
  var date = date .getDate(); //获取当前日(1-31)
  var md = "-"+(month+1)+"月"+date+"日";
  var imgPre = "image/"+year+"0"+(month+1)+date;
  $(this).hide();
  var files = e.target.files;
  var fileReader = new FileReader();
  var excle = $("#upload_excel").val();
  if(excle == null) {
  alert("未选择Excel文件");
  } else {
  // 判断是否是Excel格式
  if(excle != '') {
  //文件名可以带空格
  var reg = /^.*\.(?:xls|xlsx)$/i;
  //校验不通过
  if(!reg.test(excle)) {
  alert("请上传excel格式的文件!");
  return;
  } else {
  fileReader.onload = function(ev) {
  try {
  var data = ev.target.result,
  workbook = XLSX.read(data, {
  type: 'binary'
  }), // 以二进制流方式读取得到整份excel表格对象
  persons = []; // 存储获取到的数据
  } catch(e) {
  alert('文件类型不正确');
  return;
  }

// 表格的表格范围，可用于判断表头是否数量是否正确
var fromTo = '';
// 遍历每张表读取
for(var sheet in workbook.Sheets) {
if(workbook.Sheets.hasOwnProperty(sheet)) {
    fromTo = workbook.Sheets[sheet]['!ref'];
    persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));

    //内容去重
    $("#J_AttrUL").html("");
    //获取今天星期几
    var str = "",str_attr="";

    if (week == 1) {
            str = "今天是星期一";str_attr="__EMPTY";
    } else if (week == 2 || week == 3 ||week == 4 || week == 5) {
            str = "今天是星期二";str_attr="__EMPTY_"+(week-1);
    } else{//周六日展示周五数据
      str_attr="__EMPTY_4";
    }
    var foodTitle = "";
    for (var i in persons) {
      var obj = persons[i];

      /*早中晚餐数据展示时间不固定，暂定选择早中晚生成图片
        早餐：persons[2]-[5] 中餐：persons[7]-[10] 午餐：persons[11]-[12] 晚餐：persons[13]-[16]
        预设早中晚数据需求值：footVal=1早，2中，3午 4晚餐
      */

      var ab = parseInt(i);
      if(ab>1 && ab<6 && footVal==1){
        foodTitle = obj["绿贝儿中英文幼稚园食谱"]="早餐";
        $("#firstImg").html("");
        $("#firstImg").append('<img src="'+imgPre+'/zaocan.jpg" width="1242" height="1242" alt="">');
        //获取早餐相关数据
        for (var prop in obj) {
          if(prop == str_attr){
              $('#J_AttrUL').append("<li>"+obj[str_attr]+"</li>");
          }
        }

      }else if(ab>6 && ab<11 && footVal==2){
        foodTitle = obj["绿贝儿中英文幼稚园食谱"]="午餐";
        $("#firstImg").html("");
        $("#firstImg").append('<img src="'+imgPre+'/wucan.jpg" width="1242" height="1242" alt="">');
        //获取午餐相关数据
        for (var prop in obj) {
          if(prop == str_attr){
              $('#J_AttrUL').append("<li>"+obj[str_attr]+"</li>");
          }
        }
      }else if(ab>10 && ab<13 && footVal==3){
          foodTitle = obj["绿贝儿中英文幼稚园食谱"]="午点";
          $("#firstImg").html("");
          $("#firstImg").append('<img src="'+imgPre+'/wudian.jpg" width="1242" height="1242" alt="">');
          //获取午餐相关数据
          for (var prop in obj) {
            if(prop == str_attr){
                $('#J_AttrUL').append("<li>"+obj[str_attr]+"</li>");
            }
          }
      }else if(ab>12 && ab<17 && footVal==4){
        foodTitle = obj["绿贝儿中英文幼稚园食谱"]=="晚餐";
        $("#firstImg").html("");
        $("#firstImg").append('<img src="'+imgPre+'/wancan.jpg" width="1242" height="1242" alt="">');
        //获取晚餐相关数据
        for (var prop in obj) {
          if(prop == str_attr){
              $('#J_AttrUL').append("<li>"+obj[str_attr]+"</li>");
          }
        }

      }
   }

   $(".foodTitle").html("今日"+foodTitle+md);

}
}
if(persons.length > 10000) {
alert("Excel长度超过10000条，不能使用");
} else {
_Result = persons;
var id = "";
if(persons.length == 0) {
alert("导入Excel中无数据");
} else {
//  添加在页面表格中（添加代码就不举例说明了）
}
}
};
}
}

}
// 以二进制方式打开文件
fileReader.readAsBinaryString(files[0]);
// 清空input 值 避免选择同名字的excel 文件不执行
$("#upload_excel").val("")
});
});
