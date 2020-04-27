new ClipboardJS('.md-18');

let nums = [];
for(i = 1; i <= 30 ; i++){
    rand = Math.floor(Math.random() * 10 + i);
    nums.push(rand);
}

function shuffle(nums) {
    for(var j, x, i = nums.length; i; j = parseInt(Math.random() * i), x = nums[--i], nums[i] = nums[j], nums[j] = x);
    return nums;
};



function drawRectangleHere(nums , color){
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var width = 5;
      var currX = 10;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
         for(var i = 0; i < nums.length; i++){
              if(i == color){
                ctx.fillStyle = 'red';
              }else{
                ctx.fillStyle = 'blue';
              }
              var h = nums[i] * 10;
              ctx.fillRect((currX * 10)/2, canvas.height - h, width, h);
              currX += width + 1;
         }
    }
}
function shuffle(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    displayNumsAsList(array);
    return array;
}

function displayNumsAsList(array){
    let li = "";
    let displaynums = $('#geneNumViewer');
    for(i = 0 ; i < nums.length ; i++){
        li += "<li class='list-inline-item' style='padding: 2px;margin-left:2px;'>"+nums[i]+"</li>"
    }
    displaynums.html(li);
}


function getSortingData(sortingid){
    $('#loader').show();
    $.ajax({
        url: '/getdetails',
        method: 'POST',
        data:{
            id:sortingid
        },
        success: function(data){
           document.getElementById('intro').innerHTML = data[0][0];
           document.getElementById('analysis').innerHTML = data[0][1];
           document.getElementById('performance').innerHTML = data[0][2].concat(data[0][3]);
           document.getElementById('main-title').innerHTML = data[0][4]
           canvas = document.getElementById('visualarea');
           drawRectangleHere(nums, 0);
           displayNumsAsList(nums);
           $('#loader').hide();
        }
    });
}

function getCodeExample(sortingid){
    $.ajax({
        url: '/getcode',
        method: 'POST',
        data:{
            id:sortingid
        },
        success: function(data){
           $('#code_section').html(data);
        }
    });
}


$('.dropdown-item').on('click', function(){
    let ids = $(this).attr('id');
    if(ids !== 'undefined' || ids !== 'null'){
        if(ids === 'linked_list'){
            //setUpDisplayForLinkedList('linked_list');
            console.log('linked list')
        }else{
            if($('#visualarea')){
                getSortingData(ids);
                getCodeExample(ids);
                if(ids === 'bubble_sort'){
                    bubbleInit();
                }else if(ids == 'insertion_sort'){
                    insertionInit();
                }else if(ids == 'shell_sort'){
                    shellInit();
                }else if(ids == 'selection_sort'){
                    selectionInit();
                }else if(ids == 'merge_sort'){
                    mergeInit();
                }
            }else{
                canvas =  "<canvas id='visualarea' style='border: 1px solid #ccc' width='750' height='500'>";
                canvas += "<img src='../static/images/banner3.jpg' id='banner' width='100%' height='100%'>";
                canvas += "</canvas>";
                $('parent-canvas').html(canvas);
                getSortingData(ids);
                getCodeExample(ids);
                if(ids === 'bubble_sort'){
                    bubbleInit();
                }else if(ids == 'insertion_sort'){
                    insertionInit();
                }else if(ids == 'shell_sort'){
                    shellInit();
                }else if(ids == 'selection_sort'){
                    selectionInit();
                }else if(ids == 'merge_sort'){
                    mergeInit();
                }
            }
        }
    }
});