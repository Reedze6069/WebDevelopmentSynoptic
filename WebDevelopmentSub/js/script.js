// This function clears the error messages by setting the content of the 'errors-content' element to an empty string
// and hiding the 'errors' element by adding 'd-none' class and removing the 'd-block' class.
function clearErrors(){
    document.getElementById('errors-content').innerHTML ="";

    document.getElementById('errors').classList.remove('d-block');

    document.getElementById('errors').classList.add('d-none');
}
// This function validates the form by calling clearErrors() and obtaining values from the form fields.
// It checks if any of the fields are too short and creates error messages for those fields.
// If there are any error messages, it displays them by updating the content of the 'errors-content' element,
// removing the 'd-none' class and adding the 'd-block' class to show the 'errors' element.
function validateForm(){

    clearErrors();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var country = document.getElementById('country').value;
    var subject = document.getElementById('subject').value;

    var errors = "";

    if(veryShort(fname) == true){
        errors += "<li>The first name is too short</li>";
    }
    if(veryShort(lname)){
        errors += "<li>The last name is too short</li>";
    }

    if (isTooShort(subject)){
        errors += "<li>Message is too short, please provide more details.</li>";
    }

    if (errors != ""){
        document.getElementById('errors-content').innerHTML =
        "<ul class='errors-list'>"+errors+"</ul>";

        document.getElementById('errors').classList.remove('d-none');

        document.getElementById('errors').classList.add('d-block');

        return false;
    }
    else {
        return true;
    }

}
// This function checks if a field is empty by comparing its value to an empty string.
// If the field is empty, it returns true; otherwise, it returns false.
function isEmpty(field){
    if(field == ""){
        return true;
    }
    else{
        return false;
    }
}
// This function checks if a field is too short by comparing its length to a value of 20 characters.
// If the field is shorter than 20 characters, it returns true; otherwise, it returns false.
function isTooShort(field){
    if(field.length < 20){
        return true;
    }
    else {
        return false;
    }
}
// This function checks if a field is very short by comparing its length to a value of 2 characters.
// If the field is shorter than 2 characters, it returns true; otherwise, it returns false.
function veryShort(field){
    if(field.length < 2){
        return true;
    }
    else {
        return false;
    }
}
