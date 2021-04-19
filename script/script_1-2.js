/*
$(function(){
    $("button").click(function(){
        var data1 = parseInt($("#data1").val());
        var data2 = parseInt($("#data2").val());
        var res = data1 % data2;
        $("#out").text(res);
    });
});
*/

//$("#out").text(res); 이렇게 쓰면
//<fieldset id="out"> <legend>출력</legend> </fieldset>
//                          -----전체가 내용이 됨-----
//즉 <요소 id="out">내용</요소>
//text(res) 가 요소의 내용(레전드)까지 지운 채 들어가 버림.

//요소의 내용을 남겨두고 출력하는 방법?

$(function(){
    $("button").click(function(){
        var data1 = parseInt($("#data1").val());
        var data2 = parseInt($("#data2").val());
        var res = data1%data2;
        $("#res").text(res);
    });
});

//이렇게 임의의 공간을 지정해 준 뒤 (span) 그곳에 결과를 출력하라 명령해 주면 된다.
