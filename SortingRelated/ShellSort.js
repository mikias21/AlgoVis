function start(){
    canvas = document.getElementById('visualarea');
    var shell = shellSort(nums);
    // an anim function triggered every 60th of a second
    function draw(arr){
        requestAnimationFrame(draw);
        shell.next(); // call next iteration of the bubbleSort function
    }
    setTimeout(draw(nums), 3000);
}

function reverseSort(){
    canvas = document.getElementById('visualarea');
    var shell = shellSortReverse(nums)
    function draw(arr){
        requestAnimationFrame(draw);
        shell.next();
    }
    setTimeout(draw(nums) , 7000);
}

function* shellSort(array){
    let swap;
    let step = 0;
    let pass = 1;
    do{
        swap = false;
        //shell sort
        let halfsize = Math.floor((array.length)/2)
        for(let gap = halfsize ; gap > 0 ; gap = Math.floor(gap/2)){
            for(let i = gap; i < array.length ; i++){
                let temp = array[i];
                let j = i;
                for(; j >= gap && array[j - gap] < temp ; j -= gap){
                    array[j] = array[j - gap];
                    drawRectangleHere(array , i);
                }
                array[j] = temp;
                swapped = true;
                step++;
                displayNumsAsList(array);
                yield swapped;
            }
        }
        pass++;
    }while(swap);
}

function* shellSortReverse(array){
    let swap;
    let step = 0;
    let pass = 1;
    do{
        swap = false;
        //shell sort
        let halfsize = Math.floor((array.length)/2)
        for(let gap = halfsize ; gap > 0 ; gap = Math.floor(gap/2)){
            for(let i = gap; i < array.length ; i++){
                let temp = array[i];
                let j = i;
                for(; j >= gap && array[j - gap] > temp ; j -= gap){
                    array[j] = array[j - gap];
                    drawRectangleHere(array , i);
                }
                array[j] = temp;
                swapped = true;
                step++;
                displayNumsAsList(array);
                yield swapped;
            }
        }
        pass++;
    }while(swap);
}

function refresh(){
    shuffle(nums);
    drawRectangleHere(nums,0);
}

function shellInit(){
    document.getElementById('sortbtn').onclick = function(){start();}
    document.getElementById('refreshbtn').onclick = function(){refresh();}
    document.getElementById('reversebtn').onclick = function(){reverseSort();}
}