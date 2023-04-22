$(document).ready(function(){
    $('#send_message').click(function(){
        
        //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex2 = /^[가-힣]+$/;
        const regex = /^[|0-9|]+$/;
        var type = $('#car_type').val();
        var time = $('#time').val();
        var id = $('#id-number').val();
        var name = $('#name').val();
        var car = $('#car').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        var agree = $('#agree11').is(":checked");
        
        
        $('#name,#phone,#message,#agree11,#car,#id-number,#time,#car_type').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
         if(type == null ){
            var error = true;
            $('#car_type').addClass("error_input");
           alert("견적 유형을 선택하세요.");
        }else{
            $('#car_type').removeClass("error_input");
        }


         if(!regex1.test(car) || car.length<0 ){
            var error = true;
            $('#car').addClass("error_input");
           alert("차종 입력을 확인하세요.");
        }else{
            $('#car').removeClass("error_input");
        }


         if(!regex2.test(name) || name.length<0 ){
            var error = true;
            $('#name').addClass("error_input");
           alert("이름 입력을 확인하세요.");
        }else{
            $('#name').removeClass("error_input");
        }

        if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
            $('#phone').removeClass("error_input");
        }else{
            var error = true;
            $('#phone').addClass("error_input");
            alert("휴대폰 번호 입력을 확인하세요.");
        }

        // if(id == null ){
        //     var error = true;
        //     $('#id-number').addClass("error_input");
        //    alert("지역을 선택해주세요.");
        // }else{
        //     $('#id-number').removeClass("error_input");
        // }

        // if(time == null ){
        //     var error = true;
        //     $('#time').addClass("error_input");
        //    alert("통화 가능 시간을 선택해주세요.");
        // }else{
        //     $('#time').removeClass("error_input");
        // }

     


        if (agree == false){
            var error = true;
            $('#agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-UpBt9OoGHS_EkTSrEk7t4efAHxoWhtQUAgG--wdyGf6rHg/formResponse");
           $('#send_message').attr({'disabled' : 'true', 'value' : '전송 중입니다' });
           
            
     $('#send_message').prop("disabled", false);
    $('#send_message').css({transition:"1s"});
    $('#send_message').css({background:"#222222"});
    $('#send_message').css({color:"#fff"});
    $('#hidden_iframe11').attr("onload", "hoa();");
  

          
        }
    });    

   

});


function dll(){
    // var f = document.fm;
    // f.submit();
 
}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa(){

    OnSubmit();
 }
 
 function site1111(){
  //$('#mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form_check(){
    var name =$('#name').val();
    var car = $('#car').val();
    var ph =$('#phone').val();

    $('[name="name"]').val(name);
    $('[name="tel1"]').val('010');
     $('[name="tel2"]').val(ph.substr(3,4));
     $('[name="tel3"]').val(ph.substr(7,4));
     $('[name="item1"]').val(car);

    }

    function car_check(){
        var rl = $('#car_type').val();
        
        if(rl == "장기렌트"){
            $('[name="ms"]').val("S00242885B");
            $('[name="ca"]').val("C05120127C");
            // alert($('[name="ms"]').val());
            // alert($('[name="ca"]').val());
        }
        if(rl == "신차리스"){
            $('[name="ms"]').val("S00242293E");
            $('[name="ca"]').val("C05650828B");
            // alert($('[name="ms"]').val());
            // alert($('[name="ca"]').val());
        }
    }


 $('#name,#phone,#car').bind("keyup click change",form_check);

 $('#car_type').bind("change",car_check);

