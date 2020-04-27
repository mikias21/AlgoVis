
function* bubbleSort(array){
    let swapped;
    let step =0;
    let pass = 1;
    do{
        swapped= false;
        for(let i = array.length ; i >= 0 ; i--){
            if(array[i] < array[i+1]){
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
                step++;
                drawRectangleHere(array, i);
                yield swapped; // pause here
            }
        }
        pass++;
        displayNumsAsList(array);
    }while(swapped);
}

function* bubbleSortReversed(array){
    let swapped;
    let step = 0;
    let pass = 1;
    do{
        swapped = false;
        for(let i = array.length; i >= 0; i--){
            if(array[i] > array[i+1]){
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
                step++;
                drawRectangleHere(array , i);
                yield swapped;
            }
        }
        displayNumsAsList(array);
        pass++;
    }while(swapped);
}

function startBubbleSort(){
    canvas = document.getElementById('visualarea');
    var bubble = bubbleSort(nums);
    // an anim function triggered every 60th of a second
    function draw(arr){
        requestAnimationFrame(draw);
        bubble.next(); // call next iteration of the bubbleSort function
    }
    setTimeout(draw(nums), 3000);
}

function reverseBubbleSort(){
    canvas = document.getElementById('visualarea');
    var bubble = bubbleSortReversed(nums)
    function draw(arr){
        requestAnimationFrame(draw);
        bubble.next();
    }
    setTimeout(draw(nums) , 7000);
}

function refreshBubbleSort(){
    shuffle(nums);
    drawRectangleHere(nums,0);
}

function bubbleInit(){
    document.getElementById('sortbtn').onclick = function(){startBubbleSort();}
    document.getElementById('refreshbtn').onclick = function(){refreshBubbleSort();}
    document.getElementById('reversebtn').onclick = function(){reverseBubbleSort();}
}