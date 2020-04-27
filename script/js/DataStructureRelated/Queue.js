function getQueueInfo(type){
    $('#loader').show();
    $.ajax({
        url: '/getQueueInfo',
        method: 'POST',
        data:{
            type: type
        },success:function(data){
            $('#loader').hide();
            $('#main-title').html(data[0]);
            $('#intro').html(data[1]);
            $('#analysis-heading').html("Operations and Implementations");
            $('#analysis').html(data[1]);
            $('#performance').hide();
            setUpQueuedDisplay();
            getQueueCode("queue");
        }
    });
}

function setUpQueuedDisplay(){
    $('#reverse_opr').hide();
    $('#append_opr').hide();
    $('#traverse_opr').hide();
    $('#circular').html('Circular Queue');
    $('#type2').html('Double-ended Queue');
    $('#insert_opr').html('Enqueue');
    $('#delete_opr').html('Dequeue');
    $('#banner').attr('src','../static/images/queue/default.gif');
}

function getQueueCode(type){
    $.ajax({
        url: '/getQueueCode',
        method: 'POST',
        data:{
            type: type
        },success: function(data){
            $('#code_section').html(data)
        }
    });
}

function getMoreQueueInfo(type){
    $('#loader').show();
    $.ajax({
        url: '/getMoreQueueInfo',
        method: 'POST',
        data:{
            type: type
        },success:function(data){
            $('#loader').hide();
            $('#main-title').html(data[0]);
            $('#intro').html(data[1]);
            $('#analysis-heading').html("More Notes");
            $('#analysis').html(data[2]);
            $('#performance').hide();
        }
    });
}