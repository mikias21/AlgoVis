$('#tree').on('click', function(){
    $('#loader').show();
    $.ajax({
        url: '/getTreeInfo',
        method: 'POST',
        data:{},
        success:function(data){
            $('#main-title').html(data[0]);
            $('#intro-heading').html('');
            $('#intro').html(data[1]);
            $('#analysis-heading').html('Terms in Tree');
            $('#analysis').html(data[2]);
            $('#performance-heading').html('Tree Traversals');
            $('#performance').html(data[3]);
            $('#loader').hide();
            getTreeCode();
            $('#banner').attr('src','../static/images/tree/tree1.gif');
        }
    });
});

function getTreeCode(){
    $.ajax({
        url: '/getTreeCode',
        method: 'POST',
        data:{},
        success: function(data){
            $('#code_section').html(data)
        }
    });
}

