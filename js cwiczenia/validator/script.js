function validate()
{
    var imie = document.getElementById("imie");
    var email = document.getElementById("email");
    var ocena = document.getElementById("ocena");
    var data = document.getElementById("data");

    if(imie.value =="")
    {
        alert("Napisz imię i nazwisko");
        return false;
    }
    else
    {
        true;
    }
    if(email.value =="")
    {
        alert("Napisz swojego emaila");
        return false;
    }
    else
    {
        true;
    }
    if(ocena.value =="")
    {
        alert("Wpisz ocene");
        return false;
    }
    else
    {
        true;
    }
    if(data.value =="")
    {
        alert("Wybierz date");
        return false;
    }
    else
    {
        true;
    }
}