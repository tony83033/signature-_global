$(document).ready(function() {

    //load_projects('load');
    $(".form-email, .form-control").bind("copy paste cut",function(o){o.preventDefault()});
    
    setProjectCategory($("#type option:selected").val());
});

$(document).on('change',"#type",function (e) {
   setProjectCategory($("#type option:selected").val(), 'changed');
});

function setProjectCategory(value, type){
   	var $res = $("#res_category option:selected").val() ? $("#res_category option:selected").val() : ''
    var $com = $("#com_category option:selected").val() ? $("#com_category option:selected").val() : ''

	//console.log($res + ' ' + $com)

    $('.project-category').hide();

    if(type == 'changed'){

	if(value == 'Commercial'){
      $('.commercial').show();
      $( "#res_category" ).val('').trigger('change');
    }
      
    if(value == 'Residential'){
      $('.residential').show();
      $( "#com_category" ).val('').trigger('change');
    }

    return

	}
    
    if($com == 'Retail Shops' || $com == 'Mall' || $com == 'Sco'){
      $('.commercial').show();
      return
	}
      
    if($res == 'Affordable Group Housing' || $res == 'Independent Premium Floors' || $res == 'Residential Plots'){
      $('.residential').show();
      return
    }

    if($res.length == 0 && $com.length == 0){
       $('.residential').show();
    }
}

$(document).on('click', '.searchByall', function(){
    load_projects('search');
});

$(document).on('click', '.loadmore', function() {
    load_projects('load');
})

function load_projects(type){
    
    $('.loadmore').hide();
    var $page = (type == 'search') ? 1 : $('#page').val();
    var search = ''
    var data = $('#project-list').serialize();

    $.ajax({ url:"https://www.signatureglobal.in/load-projects.php", method:"POST", 
                data: data + '&page='+ $page,
                success:function(response){
                if(type == 'search')
                    $(".project-list").html(response);
                else
                    $(".project-list").append(response);
                    $('#page').val(parseInt($page)+1);
    		}
    	});
}

$(document).on('click', '.draw-result', function(){
    $('#draw-record, #draw-record2').remove();
    var $type = $(this).data('id');
    
    var $search = 'draw-search';
    
    if($type == 'superbia_2')
        $search = 'draw-search2';
   
    if($('#' + $search).val().trim().length <= 0)
    return; 
    
    $.ajax({ url:"https://www.signatureglobal.in/draw-list.php", method:"POST", 
                data: 'type='+ $type + '&search='+ $('#' + $search).val(),
                success:function(response){
                    $('#draw-record, #draw-record2').remove();
                    if($type == 'superbia_2')
                        $(".draw-list2 div:first-child").after(response);
                    else
                        $(".draw-list div:first-child").after(response);
    		}
    	});
});

$.validator.methods.oldRequired = $.validator.methods.required;
    $.validator.addMethod("required", function(value, element, param) {
        if (value.trim().length === 0) {
            return false;
        }
        return $.validator.methods.oldRequired.call(this, value, element, param);
    }, $.validator.messages.required);
    
$.validator.addMethod('customname', 
function(value, element) {
    return $.validator.methods.required.call(this, $.trim(value), element);
}, $.validator.messages.required);

$.validator.addMethod("customemail", 
        function(value, element) {
        return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);}, 
        "Please enter valid email" );
        
$.validator.addMethod("customphone", function(value, element) {
        return /^[6-9]\d{9}$/.test(value);}, 
        "Please enter valid mobile number");

$.validator.addMethod("digit", 
    function(value, element) {
        return /^\d+(\.\d+)?$/.test(value);
    }, 
    "Please enter valid Number"
);

var insertForm = $("#loanCalc");
var validator = insertForm.validate({
          rules:{
            loan :{ required : true ,customname:true,digit:true},
            roi : { required : true,customname:true,digit:true},
            loantenour :{ required : true ,customname:true,digit:true},
        },
        messages:{
            loan :{ required : "This field is required" ,customname:"Please enter valid Number."},
            roi :{ required : "This field is required", customname:"Please enter valid Number."},
            loantenour : { required : "This field is required", customname:"Please enter valid Number." }
        },
        submitHandler: function(insertForm) {
            
            var princ = parseInt($('#loan').val());
            var term  = parseInt($('#loantenour').val());
            var intr  = parseInt($('#roi').val() / 1200);
            var total =  parseInt(princ * intr / (1 - (Math.pow(1/(1 + intr), term))));
            
            var total = (isNaN(total)) ? 0 : total;
            
            $('input[name="emipayable"]').val(total);
        }
    
 });
 
 $.validator.addMethod("alphabets", function(value, element) {
            return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
        }, "Please enter Alphabets only");
 
 var $complaint = $('#complaint');
 
 var validator = $complaint.validate({
                        ignore: ".ignore",                        
          rules:{
            "00N5g00000S6abN" :{ required : true,alphabets:true},
            phone : { required : true,customphone:true},
            email :{ required : true ,customemail:true},
            "00N5g00000S6abO" :{ required : true},
            "00N5g00000S6abM" : { required : true},
            subject :{ required : true },
            description :{ required : true},
            hiddenRecaptcha1: { required: function(){ if (grecaptcha.getResponse() == "") {return true;}else {return false;}}},
        },
        messages:{
            "00N5g00000S6abN" :{ required : "This field is required"},
            phone :{ required : "This field is required", customphone:"Please enter valid Phone."},
            email : { required : "This field is required", customemail:"Please enter valid Email." },
            "00N5g00000S6abO" : { required : "This field is required" },
            "00N5g00000S6abM" : { required : "This field is required" },
            subject : { required : "This field is required"},
            description : { required : "This field is required" },
            hiddenRecaptcha1 : { required : "This field is required"},
        },
        submitHandler: function($complaint) {
                                                if ($complaint.valid())
   {
       form.submit(); 
   }
   return false;
            //$(".halvar_rg").attr("disabled", true);
            /*$.ajax({
                url: 'complaint_submit.php',
                type: "POST",
                data: $($complaint).serialize(),
                success: function(response) {
                    $(".btn_submit").attr("disabled",false);
                    window.location = "https://www.signatureglobal.in/thank-you.php";
                }            
            });*/
        }
    
 });
