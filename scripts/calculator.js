/* ////////////////////////////// WEB TECH 2 - NOVEMBRE 2021 CODE ///////////////////////////  

1 - Rental calculator
2 - Lessons calculator
3 - Display stored name in the ski.html page

*/


/* 1 - RENTAL CALCULATOR //////////////////////// */
$('#calc').click(function(){

    /* GETTING USER INPUT */
    let station = $('#station option:selected').attr('value'); // station
    let package = $('#package option:selected').attr('value'); // package selected
    let ski = parseInt($('#ski').val()); // number of ski pack
    let snow = parseInt($('#snow').val()); // number of snowborad pack
    let weeks = parseInt($('#weeks').val()); // number of weeks
    let totalPersons = ski + snow; // total of people
    
    /* ECONOMY */
    let priceEco = weeks * ((ski*90)+(snow*119)); /* total before descount */
    let discountEco = ((priceEco * 0.1)).toFixed(2); /* discount amount */
    let finalEco = priceEco - discountEco /* total minus discount */
       
    /* INTERMEDIATE */
    priceInt = weeks * ((ski*120)+(snow*145)); /* total before descount */
    let discountInt = ((priceInt * 0.1)).toFixed(2); /* discount amount */
    let finalInt = priceInt - discountInt; /* total minus discount */
        
    /* PERFORMANCE */
    pricePerf = weeks * ((ski*145)+(snow*170)); /* total before descount */
    let discountPerf = ((pricePerf * 0.1)).toFixed(2); /* discount amount */
    let finalPerf = pricePerf - discountPerf; /* total minus discount */

    
    if (station == 'Morzine') { // if station is morzines

        if (package == 'eco') { /* if eco package */

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { /* if less than 4 persons */
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${priceEco}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }
            else {
                $('#feedback').html(''); // if 4 people or more = discount
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalEco}</span></strong><br>
                <strong>(included discount: </strong>- £${discountEco})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } 

        } else if (package == 'int') { // if intermediate package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            } else if (totalPersons < 4) { // if less than 4 people
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${priceInt}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { //if 4 people or more = discount
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalInt}</span></strong><br>
                <strong>(included discount: </strong>- £${discountInt})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }

        } else if (package == 'perf'){ // if performance package
            
            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            } else if (totalPersons < 4) { // if less than 4 people
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${pricePerf}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { //if 4 people or more = discount
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalPerf}</span></strong><br>
                <strong>(included discount: </strong>- £${discountPerf})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
        } 
        } else {
            $('#feedback').html('Select a package');
        }

    } else if (station == 'Tignes'){

        if (package == 'eco') { /* if eco package */

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { /* if less than 4 persons */
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${priceEco}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }
            else {
                $('#feedback').html(''); // if 4 people or more = discount
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalEco}</span></strong><br>
                <strong>(included discount: </strong>- £${discountEco})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } 

        } else if (package == 'int') { // if intermediate package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            } else if (totalPersons < 4) { // if less than 4 people
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${priceInt}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { //if 4 people or more = discount
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalInt}</span></strong><br>
                <strong>(included discount: </strong>- £${discountInt})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }

        } else if (package == 'perf'){ // if performance package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            } else if (totalPersons < 4) { // if less than 4 people
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${pricePerf}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { //if 4 people or more = discount
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalPerf}</span></strong><br>
                <strong>(included discount: </strong>- £${discountPerf})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
        } 

        } else {
            $('#feedback').html('Select a package');
        }

    } else if (station == 'La Tania'){

        if (package == 'eco') { /* if eco package */

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { /* if less than 4 persons */
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${priceEco}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }
            else {
                $('#feedback').html(''); // if 4 people or more = discount
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalEco}</span></strong><br>
                <strong>(included discount: </strong>- £${discountEco})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } 

        } else if (package == 'int') { // if intermediate package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            } else if (totalPersons < 4) { // if less than 4 people
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${priceInt}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { //if 4 people or more = discount
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalInt}</span></strong><br>
                <strong>(included discount: </strong>- £${discountInt})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }

        } else if (package == 'perf'){ // if performance package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            } else if (totalPersons < 4) { // if less than 4 people
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${pricePerf}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { //if 4 people or more = discount
                $('#feedback').html('');
                $('#sum').html(`<strong>Total price: <span class="text-info">£${finalPerf}</span></strong><br>
                <strong>(included discount: </strong>- £${discountPerf})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski, Boots & Poles: </strong>${ski}<br> 
                <strong>Snowboard & Boots: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
        } 

        } else {
            $('#feedback').html('Select a package');
        }

    } else { // if no station selected
        $('#feedback').html('Please select a station');
        $('#sum').html('');
    } 
    console.log(station)          
});   



/* 2 - LESSONS CALCULATOR /////////////////////////////////////*/


$('#calc2').click(function(){

    
    /* GETTING USER INPUT */
    let location = $('#station2 option:selected').attr('value'); // selected station
    let station = ''; 
    let package = $('#package2 option:selected').attr('value'); // selected package
    let ski = parseInt($('#ski2').val()); // number of ski lessons
    let snow = parseInt($('#snow2').val()); // number of snow lessons
    let weeks = parseInt($('#weeks2').val()); // number of weeks
    let totalPersons = ski + snow; //number of people

    /* ECONOMY */
    let priceEco = weeks * ((ski*90)+(snow*119)); /* total before descount */
    let discountEco = ((priceEco * 0.1)).toFixed(2); /* discount amount */
    let finalEco = priceEco - discountEco /* total minus discount */

    /* INTERMEDIATE */
    priceInt = weeks * ((ski*120)+(snow*145)); /* total before descount */
    let discountInt = ((priceInt * 0.1)).toFixed(2); /* discount amount */
    let finalInt = priceInt - discountInt; /* total minus discount */
    
    /* PERFORMANCE */
    pricePerf = weeks * ((ski*145)+(snow*170)); /* total before descount */
    let discountPerf = ((pricePerf * 0.1)).toFixed(2); /* discount amount */
    let finalPerf = pricePerf - discountPerf; /* total minus discount */


    if (location == 'tania2'){ // if station is la tania
        station = "La Tania" // displays correctly written name

        if (package == 'eco2') { /* if eco package */

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback2').html('Please fill all the fields (including 0).')
            }
            else if (totalPersons < 4) { /* if less than 4 persons */
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${priceEco}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }
            else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalEco}</span></strong><br>
                <strong>(included discount: </strong>- £${discountEco})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }  

        } else if (package == 'int2') { // if intermediate package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { // if less than 4 people
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${priceInt}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalInt}</span></strong><br>
                <strong>(included discount: </strong>- £${discountInt})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }

        } else if (package == 'perf2'){ // if performance package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { // if less than 4 people
                $('#feedback2').html(''); 
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${pricePerf}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalPerf}</span></strong><br>
                <strong>(included discount: </strong>- £${discountPerf})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
        } 

        } else {
            $('#feedback2').html('Please select a package');
        }

    } else if (location == 'morzine2') {
        station = "Morzine" // displays correctly written name

        if (package == 'eco2') { /* if eco package */

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback2').html('Please fill all the fields (including 0).')
            }
            else if (totalPersons < 4) { /* if less than 4 persons */
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${priceEco}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }
            else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalEco}</span></strong><br>
                <strong>(included discount: </strong>- £${discountEco})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } 

        } else if (package == 'int2') { // if intermediate package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { // if less than 4 people
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${priceInt}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalInt}</span></strong><br>
                <strong>(included discount: </strong>- £${discountInt})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }

        } else if (package == 'perf2'){ // if performance package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { // if less than 4 people
                $('#feedback2').html(''); 
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${pricePerf}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalPerf}</span></strong><br>
                <strong>(included discount: </strong>- £${discountPerf})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
        } 

        } else {
            $('#feedback2').html('Please select a package');
        }

    } else if (location == 'tignes2'){
        station = "Tignes" // displays correctly written name

        if (package == 'eco2') { /* if eco package */

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback2').html('Please fill all the fields (including 0).')
            }
            else if (totalPersons < 4) { /* if less than 4 persons */
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${priceEco}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }
            else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalEco}</span></strong><br>
                <strong>(included discount: </strong>- £${discountEco})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } 

        } else if (package == 'int2') { // if intermediate package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { // if less than 4 people
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${priceInt}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalInt}</span></strong><br>
                <strong>(included discount: </strong>- £${discountInt})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            }

        } else if (package == 'perf2'){ // if performance package

            if (( !ski && ski !== 0 ) || ( !snow && snow !== 0 ) || ( !weeks || weeks == 0 )){ /* if any field not filled */
                $('#feedback').html('Please fill all the fields (including 0).');
            }
            else if (totalPersons < 4) { // if less than 4 people
                $('#feedback2').html(''); 
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${pricePerf}</span></strong><br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
            } else { // if 4 or more people = discount
                $('#feedback2').html('');
                $('#sum2').html(`<strong>Total price: <span class="text-info">£${finalPerf}</span></strong><br>
                <strong>(included discount: </strong>- £${discountPerf})<br>
                <strong>Station: </strong>${station}<br>
                <strong>Amount of weeks: </strong>${weeks}<br>
                <strong>Number of people: </strong>${totalPersons}<br>
                <strong>(Ski lessons: </strong>${ski}<br> 
                <strong>Snowboard lessons: </strong>${snow})<br>
                <button class="btn btn-info text-white mt-4">BOOK NOW</button>`);
        } 

        } else {
            $('#feedback2').html('Please select a package');
        }

    } else {
        $('#feedback2').html('Please select a station')
        $('#sum2').html('')
    } 
});   



/* 3 - DISPLAY NAME FROM LOCALSTORAGE ON SKI PAGE ////////////////////////////////*/
function displayRental() {
    let myUsername = localStorage.getItem("stored_username");
    let capName = myUsername.toUpperCase();
    let nameTitle = document.querySelector('#nameTitle');

    console.log(capName)

    if (myUsername == null){
        nameTitle.innerHTML = ('')
    } else {
        nameTitle.innerHTML = (`FOR YOU ${capName},`)
        console.log(myUsername)
    }
   
} 
displayRental();


