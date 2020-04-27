
window.onload = () => {
    $('#type1').hide();
    $('#type2').hide();
    getLinkedListInfo('linked_list');
<!--    $(document).ready(function(){-->
<!--        var c = document.getElementById("visualarea");-->
<!--        var ctx = c.getContext("2d");-->
<!--        var img = document.getElementById("banner");-->
<!--        ctx.drawImage(img, 40, 30);-->
<!--    });-->
    $('#loader').hide();

    $('#type1').on('click', function(){
        type = $(this).text();
        getLinkedListInfo(type);
    });

    $('#type2').on('click', function(){
        type = $(this).text();
        getLinkedListInfo(type);
    });

    $('#insert_opr').on('click' , function(){
        setCodeInPlace($('#insert_opr'));
        setProperImage($('#insert_opr'));
    });
    $('#delete_opr').on('click' , function(){
        setCodeInPlace($('#delete_opr'));
        setProperImage($('#delete_opr'))
    });
    $('#traverse_opr').on('click' , function(){
        setCodeInPlace($('#traverse_opr'));
        setProperImage($('#traverse_opr'));
    });
    $('#append_opr').on('click' , function(){
        setCodeInPlace($('#append_opr'));
        setProperImage($('#append_opr'));
    });
    $('#reverse_opr').on('click' , function(){
        setCodeInPlace($('#reverse_opr'));
        setProperImage($('#reverse_opr'))
    });

    $('#type2').on('click' , function(){
        $('#banner').attr('src','../static/images/linkedlist/double/default.gif');
    });

    $('#stack').on('click' , function(){
        id = $(this).attr('id');
        getStackInfo(id);
    });

    $('#queue').on('click' , function(){
        id = $(this).attr('id');
        getQueueInfo(id);
        $('#insert_opr').on('click' , function(){
            id = $(this).attr('id');
            getQueueCode(id);
            $('#banner').attr('src','../static/images/queue/insert_opr.gif');
        });
        $('#delete_opr').on('click' , function(){
            id = $(this).attr('id');
            getQueueCode(id);
            $('#banner').attr('src','../static/images/queue/delete_opr.gif');
        })
        $('#type1').attr('id','circular');
        $('#type2').attr('id','double');
        $('#circular').on('click' , function(){
            value = $('#circular').text();
            getMoreQueueInfo(value);
        });
    });
}


