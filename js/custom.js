//проверка на правильное заполнение формы

        $(function frmotpr(){
            var field = new Array("name_f", "contact_f", "mssg_f");
            $("#file_form").submit(function() {
                var error=0;
            $("#file_form").find(":input").each(function() {
                for(var i=0;i<field.length;i++){
                    if($(this).attr("name")==field[i]){
                        if(!$(this).val()){
                            $(this).addClass('notvalid');
                            error=1;    
                        }
                        else{
                            $(this).removeClass('notvalid');
                        }
                    }                       
                }               
           })

        })
    });
 


//плавная навигация по сайту
 $(document).ready(function(){
  $("li a").click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({scrollTop: destination }, 800);
  });
});


//burger

$(document).ready(function () {

    $('#swipe-open, #swipe-close').click(function () {

        $('#swipe-menu').toggleClass('opened');

    });

});