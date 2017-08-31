$("form").submit(function(e) {
    //replace the submit function with a document query selector that fires somehow

    var address = document.querySelector("address");
    var result = $('.w-form__input').val();
    
    e.preventDefault();

    $.getJSON("location.json", function(data) {

        var noResults = document.createElement('p');
        var myArticle = document.createElement('article');
        var content = document.createElement('ul');
        var title = document.createElement('h2');
        var location = document.createElement("li");
        var city = document.createElement("li");
        var phone = document.createElement('li');
        var email = document.createElement('li');
        var link = document.createElement('a');

        for(var i = 0; i < data.length; i++) {
            var currentItem = data[i];

            if(result == data[i].ZipCode) {

                address.innerHTML = "";

                myArticle.className = 'w-address';
                content.classList = "w-address__content";
                title.className = "w-address__heading";
                location.className = "w-address__location";
                city.className = "w-address__location";
                email.className = "w-address__email";

                title.textContent = data[i].title;
                location.textContent = "Address: " + data[i].AddressLine1 + ", " + data[i].AddressLine2;
                phone.textContent = "Phone: " + data[i].TelephoneNumber;
                city.textContent = data[i].City +", " + data[i].State + " " + data[i].ZipCode;

                link.textContent = data[i].EmailAddress;
                link.setAttribute("href", "mailto:" + data[i].EmailAddress);

                myArticle.appendChild(title);
                myArticle.appendChild(content);

                content.appendChild(location);
                content.appendChild(city);
                content.appendChild(phone);
                content.appendChild(email);
                email.appendChild(link);

                address.appendChild(myArticle);
                
                return;
            
            } else {
                address.innerHTML = "";
                noResults.textContent = "No zip code matched your submission, check and try again";
                address.appendChild(noResults);
            }
        }   
    });
})