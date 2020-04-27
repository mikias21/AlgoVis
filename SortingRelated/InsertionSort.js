function startInsertion(){
    canvas = document.getElementById('visualarea');
    var insertion = insertionSort(nums);
    // an anim function triggered every 60th of a second
    function draw(arr){
        requestAnimationFrame(draw);
        insertion.next(); // call next iteration of the bubbleSort function
    }
    setTimeout(draw(nums), 3000);
}

function reverseInsertionSort(){
    canvas = document.getElementById('visualarea');
    var insertion = insertionSortReverse(nums)
    function draw(arr){
        requestAnimationFrame(draw);
        insertion.next();
    }
    setTimeout(draw(nums) , 7000);
}

function refreshInsertion(){
    shuffle(nums);
    drawRectangleHere(nums,0);
}

function* insertionSort(array){
    let swapped;
    let step = 0;
    let pass = 1;
    do{
        swapped = false;
        //insertion sort
        for(let i = 1 ; i < array.length; i++){
            let temp = array[i];
            let j = i - 1
            for(; j >= 0 && array[j] > temp ; j--){
                array[j+1] = array[j];
            }
            array[j+1] = temp;
            swapped = true;
            step++;
            drawRectangleHere(array , i);
            yield swapped;
            displayNumsAsList(array);
        }
        pass++;
        break;
    }while(swapped);
}

function* insertionSortReverse(array){
    let swapped;
    let step = 0;
    let pass = 1;
    do{
        swapped = false;
        //insertion sort
        for(let i = 1 ; i < array.length; i++){
            let temp = array[i];
            let j = i - 1
            for(; j >= 0 && array[j] < temp ; j--){
                array[j+1] = array[j];
            }
            array[j+1] = temp;
            swapped = true;
            step++;
            drawRectangleHere(array , i);
            displayNumsAsList(array);
            yield swapped;
        }
        pass++;
        break;
    }while(swapped);
}

function insertionInit(){
    document.getElementById('sortbtn').onclick = function(){startInsertion();}
    document.getElementById('refreshbtn').onclick = function(){refreshInsertion();}
    document.getElementById('reversebtn').onclick = function(){reverseInsertionSort();}
}
