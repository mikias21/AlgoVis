
function getLinkedListInfo(type){
    $('#loader').show();
    $.ajax({
        url: '/getLinkedListInfo',
        method: 'POST',
        data:{
            type:type
        },
        success: function(data){
            $('#main-title').html(data[0][0]);
            $('#intro').html(data[0][1]);
            $('#analysis-heading').html("Disadvantages of using linked lists");
            $('#analysis').html(data[0][2]);
            $('#type1').show();
            $('#type2').show();
            $('#loader').hide();
        }
    });
}

function getListCode(){
    $.ajax({
        url: '/getlistcode',
        method: 'POST',
        data:{},
        success: function(data){
            $('#code_section').html(data);
        }
    });
}

function getOperationCode(title , operation){
       $('#loader').show();
       $.ajax({
            url: '/getoperationcode',
            method: 'POST',
            data:{
                title: title,
                operation: operation
            },success: function(data){
                $('#code_section').html(data);
                $('#loader').hide();
            }
       });
}

function setCodeInPlace(buttonId){
    if($('#main-title').text() == "Linked list" || $('#main-title').text().includes("single")){
            title = "single";
            opr = buttonId.attr('id');
            getOperationCode(title,opr);
    }else{
            title = "double";
            opr = buttonId.attr('id');
            getOperationCode(title,opr);
    }
}

function setProperImage(buttonId){
    if($('#main-title').text() == "Linked list" || $('#main-title').text().includes("single")){
            title = "single";
            opr = buttonId.attr('id');
            $('#banner').attr('src','../static/images/linkedlist/single/'+opr+'.gif');
    }else{
            title = "double";
            opr = buttonId.attr('id');
//            getOperationCode(title,opr);
            $('#banner').attr('src','../static/images/linkedlist/double/'+opr+'.gif');
    }
}