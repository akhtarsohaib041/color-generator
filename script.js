const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerHTML = randomCode;
}


//event Call
document.getElementById('btn').addEventListener(
    'click',
    getColor
)


// Enit Call
getColor();