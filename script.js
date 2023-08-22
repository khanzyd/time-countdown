
const nos = document.querySelectorAll("#no");
const deadline = document.querySelector(".deadline");


//  ---- this tmp dates to ensure that end date of sale is always 10 days ahead so that the timer always runs ---- //
const tmp = new Date();
const tmpyear = tmp.getFullYear();
const tmpmonth = tmp.getMonth();
const tmpdate = tmp.getDate();

//  ------ sale end date  ------------  //
let futuredate = new Date(tmpyear, tmpmonth, tmpdate + 10 , 12, 0, 0);


function sale_end(){

    //  ------ current date  ------------  //
    let currentdate = new Date();
        
    //  ------ time remaining between sale end and current time  -------  //
    let remainingtime = futuredate.getTime() - currentdate.getTime();

    // 1 day = 24 * 60 * 60 * 1000
    // 1 hr = 60 * 60 * 1000
    // 1 min = 60 * 1000
    // 1 sec = 1000

    const oneday = 24 * 60 * 60 * 1000;
    const onehr = 60 * 60 * 1000
    const onemin = 60 * 1000;  
    const onesec = 1000;
    
    //  ----- remaining time calculation  -------  //

    let days = Math.floor(remainingtime / oneday);
    let hrs = Math.floor((remainingtime % oneday) / onehr);
    let mins = Math.floor((remainingtime % onehr) / onemin);
    let secs = Math.floor((remainingtime % onemin) / onesec);

    let newvalues = [days, hrs, mins, secs]

    function setno(no){
        if( no < 10){
            no = `0${no}`
            return no;
        }
        return no;
    }
    
    nos.forEach((no,index) => {
        no.textContent = setno(newvalues[index]);
    })

    if(remainingtime <= 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h3 class="sale-end">The sale has ended !</h3>`;
    }
}

let countdown = setInterval(sale_end, 1000);
sale_end();
// let hr = remainingtime