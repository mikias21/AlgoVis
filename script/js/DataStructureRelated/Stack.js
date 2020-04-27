function getStackInfo(type){
    $('#loader').show();
    $.ajax({
        url: '/getStackInfo',
        data:{
            type: type
        },
        method: 'POST',
        success:function(data){
            $('#loader').hide();
            $('#main-title').html(data[0]);
            $('#intro').html(data[1]);
            $('#analysis-heading').html("Operations and Implementations");
            $('#analysis').html(data[1]);
            $('#performance').hide();
            setUpStackDisplay();
            getStackCode("stack");
            getProperImage();
        }
    });
}

function setUpStackDisplay(){
    $('#loader').hide();
    $('#banner').attr('src','../static/images/stack/default3.gif');
    $('#reverse_opr').hide();
    $('#append_opr').hide();
    $('#traverse_opr').hide();
    $('#type1').hide();
    $('#type2').hide();
    $('#insert_opr').html("Push");
    $('#delete_opr').html("Pop");
    $('#push').on('click' , function(){
        id = $(this).attr('id');
    });
}

function getStackCode(type){
    $.ajax({
        url: '/getStackCode',
        method: 'POST',
        data:{
            type: type
        },success: function(data){
            $('#code_section').html(data)
        }
    });
}

function getProperImage(){
    let path = '../static/images/stack/';
    $('#insert_opr').on('click' , function(){
        $('#banner').attr('src','../static/images/stack/insert_opr.gif');
    })
    $('#delete_opr').on('click' , function(){
        $('#banner').attr('src','../static/images/stack/delete_opr.gif');
    })
}