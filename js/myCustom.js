
//parseInt([array] );

document.getElementById("click_me").addEventListener("click", theHorizon);

function theHorizon(){
    
    let results = [see];
    let array = [];
    let bld1 =  parseInt(document.getElementById("1stBldg").value);
    array.push(bld1);
    let bld2 =  parseInt(document.getElementById("2ndBldg").value);
    array.push(bld2);
    let bld3 =  parseInt(document.getElementById("3rdBldg").value);
    array.push(bld3);
    let bld4 =  parseInt(document.getElementById("4thBldg").value);
    array.push(bld4);
    let bld5 =  parseInt(document.getElementById("5thBldg").value);
    array.push(bld5);

    for(let i = 1; i < array.length ; i++){
        let bigger = false;
        for(let j = 0; j < i ; j++){
            if (array[j] >= buildings[i]){
                bigger = true;
                break;
            } else {
                continue;
            }
        }
        bigger ? results.push("Blind"):results.push("See");
    }
    let see = results.filter(x => x =='see').length;
    let blind = results.filter(x => x =='blind').length;
    results.push(blind);

    document.getElementById("result").innerText = results;
}




