var ComponentsDateTimePickers=function(){var handleDatePickers=function(){if(jQuery().datepicker){$('.date-picker').datepicker({rtl:App.isRTL(),orientation:"left",autoclose:true});}
$(document).scroll(function(){$('#form_modal2 .date-picker').datepicker('place');});}
return{init:function(){handleDatePickers();}};}();