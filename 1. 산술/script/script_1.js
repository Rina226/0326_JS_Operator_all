$(function () {
    $("button").click(function () {
        var number1 = $("#number1").val();
        var number2 = $("#number2").val();
        var result = parseInt(number1) + parseInt(number2)

        $("#addRes").text("result : " + result);
    });
});

//parseInt(number1) + parseInt(number2) 사이의 기호를 덧,뺄,곱,나눗,나머지셈으로 바꿀 때마다 각기 다른 산술이 적용됨
