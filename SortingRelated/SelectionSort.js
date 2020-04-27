function* selectionSort(array){
    let swapped;
    let step = 0;
    let pass = 1;
    do{
        swapped = false;
        //selection sort starts here
        for(let i = 0 ; i < array.length - 1; i++){
            let min_index = i;
            for(let j = i + 1; j < array.length ; j++){
                if(array[j] < array[min_index]){
                    min_index = j;
                    drawRectangleHere(array , i);
                }
            }
            let temp = array[min_index];
            array[min_index] = array[i];
            array[i] = temp;
            swapped = true;
            step++;
            displayNumsAsList(array);
            yield swapped;
        }
        pass++;
        break;
    }while(swapped)
}

function* selectionSortReversed(array){
let swapped;
    let step = 0;
    let pass = 1;
    do{
        swapped = false;
        //selection sort starts here
        for(let i = 0 ; i < array.length - 1; i++){
            let min_index = i;
            for(let j = i + 1; j < array.length ; j++){
                if(array[j] > array[min_index]){
                    min_index = j;
                    drawRectangleHere(array , i);
                }
            }
            let temp = array[min_index];
            array[min_index] = array[i];
            array[i] = temp;
            swapped = true;
            step++;
            displayNumsAsList(array);
            yield swapped;
        }
        pass++;
        break;
    }while(swapped)
}


function startSelection(){
    canvas = document.getElementById('visualarea');
    var selection = selectionSort(nums);
    // an anim function triggered every 60th of a second
    function draw(arr){
        requestAnimationFrame(draw);
        selection.next(); // call next iteration of the bubbleSort function
    }
    setTimeout(draw(nums), 3000);
}

function reverseSelectionSort(){
    canvas = document.getElementById('visualarea');
    var selection = selectionSortReversed(nums)
    function draw(arr){
        requestAnimationFrame(draw);
        selection.next();
    }
    setTimeout(draw(nums) , 7000);
}

function refreshSelection(){
    shuffle(nums);
    drawRectangleHere(nums,0);
}

function selectionInit(){
    document.getElementById('sortbtn').onclick = function(){startSelection();}
    document.getElementById('refreshbtn').onclick = function(){refreshSelection();}
    document.getElementById('reversebtn').onclick = function(){reverseSelectionSort();}
}