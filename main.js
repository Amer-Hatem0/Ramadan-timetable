var count = 0; // تعيين العداد بصفر
var count2 = 0;
var count3 = 0;
  
function increment() {
    count++; // زيادة العداد بواحد
    document.getElementById("counter").innerHTML = count; // تحديث العداد في الصفحة
  }
  function increment2() {
    count2++; // زيادة العداد بواحد
    document.getElementById("counter2").innerHTML = count2; // تحديث العداد في الصفحة
  }
  function increment3() {
    count3++; // زيادة العداد بواحد
    document.getElementById("counter3").innerHTML = count3; // تحديث العداد في الصفحة
  }

  function reset()
  {count = 0;
    document.getElementById("counter").innerHTML = 0;
  }
  function reset2()
  {count2 = 0;
    document.getElementById("counter2").innerHTML = 0;
  }
  function reset3()
  {  count3 = 0;
    document.getElementById("counter3").innerHTML = 0;
  }