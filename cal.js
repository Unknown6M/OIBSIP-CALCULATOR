let s1 = document.getElementById('s1');
buttons = document.querySelectorAll('button');
let s1Value = '';
for (item of buttons) 
{
    item.addEventListener('click', (w) => 
    {
        buttonText = w.target.innerText;
        console.log('Button text', buttonText);
        if (buttonText == 'X')
        {
            buttonText = '*';
            s1Value += buttonText;
            s1.value = s1Value;
        }
        else if (buttonText == 'AC') 
        {
            s1Value = "";
            s1.value = s1Value;
        }
        else if (buttonText == '=')
        {
            s1.value = eval(s1Value);
        }
        else 
        {
            s1Value += buttonText;
            s1.value = s1Value;
        }

    })
}

