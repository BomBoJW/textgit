 //��Ϊʹ����document������js��Ҫ������Ҫִ�еĴ���������Ч������Ч
    var li=document.getElementById('lunbo').getElementsByTagName("li");
    var num=0;
    var len=li.length;

    setInterval(function(){
        li[num].style.display="none";
        num=++num==len?0:num;
        li[num].style.display="inline-block";

    },3000);//�л�ʱ��