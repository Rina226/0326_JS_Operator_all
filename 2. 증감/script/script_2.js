$(function(){
    $("button").click(function(){
      var data1 = parseInt($("#insData").val());
        ++data1;
        //++data1; 선증가연산자
        //data1++; 후증가연산자
        $("#outData").text(data1);

        alert("data1의 최종값 : " + data1)
    });

});

//증감연산자 기호=> ++ , --
    //사용법 : 숫자 또는 숫자형 변수에 사용함
    //보기 : 2++, ++3
    //          var number1 = 5;
    //          number1++; , ++number1;
    //증감연산자는 증가연산자(++)와 감소연산자(--)가 있음
    //증가연산자의 결과는 입력된 값의 +1인 결과
    //감소연산자의 결과는 입력된 값의 -1인 결과
