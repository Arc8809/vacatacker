function $(idName) {
    document.getElementById(idName);
}
function $$(tagName) {
    document.getElementById(tagName);
}
//create constants for the form and fomr controls 



const newVactionFormEl =
    document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementsById("start-date");
const endDateInputEl = document.getElementsById("end-date");

//listen to form submissions
newVacationFormEl.addEventListener("submit", (event) => {
    //prevent tje form from submitting to the server
    // since were doing everything on the client side
    event.preventDefault();
    
    //get the dates from the form
    const startDate = startDateInputEl.value;
    const endDate = endDateInputEl.value;

    //check if the dates are invalid
    if (checkDatesInvalid(startDate, endDate)) {
        return; // dont "sumbit" the form just exit
    }

    //store the new vacation in our client side sorage
    storeNewVaction(startDate, endDate)
    //refresh UI
    renderPastVactions();
    //reset form
    newVactionFormEl.reset();

});
//checks invalid date
function checkDatesInvalid(startDate, endDate) {
    if (!startDate || !endDate || startDate > endDate) {
        newVactionFormEl.reset;
        return true;
    }
    else {
        return false;
    }
}
//add the storage key as an app-wideConstant
const STORAGE_KEY = "vaca_tracker";
function storeNewVaction(startDate, endDate) {
    //get data from storage
    const vactions=getAllStoredVactions();//returns array of strings
    //add the new vaction at the end of the array
    vacations.push({startdDate,endDate});
    //sort the arrayso the newest to oldest vacations
    vacations.sort((a,b)=>{
    return new Date(b.startDate)-new Date(a.startDate);

    });

    //store the new array back in storage
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(vacations));
}//store vaction