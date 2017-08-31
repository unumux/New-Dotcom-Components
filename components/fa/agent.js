$("form").submit(function(e) {
    //replace the submit function with a document query selector that fires somehow

    var address = document.querySelector("address");
    var result = $('.w-form__input').val();
    
    e.preventDefault();

    $.getJSON("location.json", function(data) {

        var noResults = document.createElement('p');
        address.innerHTML = "";

        for(var i = 0; i < data.length; i++) {
            var currentItem = data[i];

            if(result == data[i].ZipCode) {

                const output = `
                    <article class="w-address">
                        <h2 class="w-address__heading">${data[i].title}</h2>
                        <ul class="w-addess__content">
                            <li class="w-address__location">${"Address: " + data[i].AddressLine1 + ", " + data[i].AddressLine2}</li>
                            <li class="w-address__location">${data[i].City +", " + data[i].State + " " + data[i].ZipCode}</li>
                            <li>${"Phone: " + data[i].TelephoneNumber}</li>
                            <li class="w-address__email">
                                <a href="${"mailto:" + data[i].EmailAddress}">${data[i].EmailAddress}</a>
                            </li>
                        </ul>
                    </article>
                `

                address.innerHTML = output;

                return;
            
            } else {
                noResults.textContent = "No zip code matched your submission, check and try again";
                address.appendChild(noResults);
            }
        }   
    });
})