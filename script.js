 function Fixed_Deposit(){

        document.getElementById("Fixed_Deposit").style.display= "block";
        document.getElementById("PTconverter").style.display= "none";
        document.getElementById("Coding_language").style.display= "none";


    }

    function PTconverter(){

        document.getElementById("Fixed_Deposit").style.display=  "none";
        document.getElementById("PTconverter").style.display= "block";
        document.getElementById("Coding_language").style.display= "none";


    }

    function coding_languages(){

        document.getElementById("Fixed_Deposit").style.display=  "none";
        document.getElementById("PTconverter").style.display= "none";
        document.getElementById("Coding_language").style.display= "block";


    }
    
    
    
    function FD_calc(){


    const FD_amount = Number(document.getElementById("FD_amount").value);

       const Tenure_months = Number(document.getElementById("Tenure_months").value);

        let rate=0.058;

       
        if (3 <= Tenure_months) {
            rate = 0.065; }
        if(6 < Tenure_months) {
            
            rate = 0.07;
        }
        if(9 < Tenure_months) {
            
            rate = 0.075;
        }
let total_income= (((FD_amount * rate)/12)*Tenure_months) + FD_amount;


        document.getElementById("amount").innerText="Total return is Rs. " + total_income.toFixed(2)

    }


   


document.getElementById('input_value').addEventListener('mouseover', function(){alert("Don't touch!!!!!")})

     function converter_pt(){


        let px_values = Number(document.getElementById("input_value").value);

        let converter_value = px_values * 0.75;

        document.getElementById("Answer").innerText= converter_value.toFixed(2) + " pt"

    }



    const know_btn = document.querySelector('.know_btn');


    know_btn.addEventListener('mouseover', display_states);



   function display_states(){

        let opt_language_value = document.getElementById("languages_value").value;

        let text=""
        switch(opt_language_value){

            case 'Html':
                text=`<b>Author:</b> Tim Berners-Lee created HTML.<br>
<b>Release Date:</b> HTML was first released in 1991.<br>
<b>Uses:</b> Structure web pages, embed media, create links.`
            break
             case 'CSS':
               text=`<b>Author:</b> Håkon Wium Lie developed CSS.<br>
<b>Release Date:</b> CSS was released in 1996.<br>
<b>Uses:</b> Style web pages, control layout, responsive design.`

            break

             case 'JavaScript':
               text=`<b>Author:</b> Brendan Eich invented JavaScript.<br>
<b>Release Date:</b> JavaScript was released in 1995.<br>
<b>Uses:</b> Add interactivity, validate forms, dynamic content.`

            break

             case 'Python':
                text=`<b>Author:</b> Guido van Rossum created Python.<br>
<b>Release Date:</b> Python was first released in 1991.<br>
<b>Uses:</b> Data analysis, web development, automate tasks.`

            break
        }

        document.getElementById('states_text').innerHTML = text;


    }
