let outputs = document.getElementById('outputs');

function colors(){
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;

    outputs.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.getElementById('output').innerHTML = 'rgb (' + red + ', ' + green + ', ' + blue + ')';
}