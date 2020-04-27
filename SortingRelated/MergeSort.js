var values = [];
var numLines = 100;
var sortHist = [];

function* mergeSort(array) {
    var arrays = [array.slice()],
    n = array.length,
    array0 = array,
    array1 = new Array(n);
    let swapped;
    let step = 0;
    let pass = 1;
    do{
        for (var m = 1; m < n; m <<= 1) {
            for (var i = 0; i < n; i += (m << 1)) {
                merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
                yield swapped;
            }
            arrays.push(array1.slice());
            array = array0, array0 = array1, array1 = array;

        }

        function merge(left, right, end) {
          for (var i0 = left, i1 = right, j = left; j < end; ++j) {
            array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
            swapped = true;
            step++;
            drawRectangleHere(array1 , i0);
            displayNumsAsList(arrays);
          }
        }
        pass++;
        break;
    }while(swapped);
}

function* mergeSortReverse(array) {
    var arrays = [array.slice()],
    n = array.length,
    array0 = array,
    array1 = new Array(n);
    let swapped;
    let step = 0;
    let pass = 1;
    do{
        for (var m = 1; m < n; m <<= 1) {
            for (var i = 0; i < n; i += (m << 1)) {
                merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
                yield swapped;
            }
            arrays.push(array1.slice());
            array = array0, array0 = array1, array1 = array;
        }

        function merge(left, right, end) {
          for (var i0 = left, i1 = right, j = left; j < end; ++j) {
            array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <= array0[i1]) ? i0++ : i1++];
            swapped = true;
            step++;
//            yield swapped;
            drawRectangleHere(array1 , i0);
            displayNumsAsList(arrays);
          }
        }
        pass++;
        break;
    }while(swapped);
}


function startMergeSort(){
    canvas = document.getElementById('visualarea');
    var merge = mergeSort(nums);
    // an anim function triggered every 60th of a second
    function draw(arr){
        requestAnimationFrame(draw);
        merge.next();
    }
    setTimeout(draw(nums), 3000);
}

function startMergeSortReverse(){
    canvas = document.getElementById('visualarea');
    var merge = mergeSortReverse(nums);
    // an anim function triggered every 60th of a second
    function draw(arr){
        requestAnimationFrame(draw);
        merge.next();
    }
    setTimeout(draw(nums), 3000);
}

function refreshMergeSort(){
    shuffle(nums);
    drawRectangleHere(nums,0);
}

function mergeInit(){
    document.getElementById('sortbtn').onclick = function(){startMergeSort();}
    document.getElementById('refreshbtn').onclick = function(){refreshMergeSort();}
    document.getElementById('reversebtn').onclick = function(){startMergeSortReverse();}
}