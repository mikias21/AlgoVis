    window.onload = () => {
        getCircularQueueData();
        getCirQueueCode();
    }


function getCircularQueueData(){
    $.ajax({
        url: 'getMoreQueueInfo',
        method: 'post',
        data:{
            type: 'Circular Queue'
        },
        success:function(data){
            $('#intro-heading').html(data[0])
            $('#analysis').html(data[1])
            $('#performance').html(data[2])
            $('#loader').hide();
        }
    });
}

function getCirQueueCode(){
    $.ajax({
        url: 'getCirQueueCode',
        method: 'post',
        success:function(data){
            $('#code_section').html(data);
        }
    });
}
