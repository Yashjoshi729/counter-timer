const daysele = document.querySelector('.days')
const hoursele = document.querySelector('.hours')
const minutesele = document.querySelector('.minutes')
const secondsele = document.querySelector('.seconds')
const heading = document.querySelector('h1')
const countertimer= document.querySelector('.countertimer')

const second = 1000
const minute = 60 * second
const hour = 60 * minute
const day = 24 * hour

const timerfxn = () => {
    let now = new Date(),
        dd = String(now.getDate()).padStart(2, '0'),
        mm = String(now.getMonth()).padStart(2, '0'),
        yyyy = now.getFullYear()

    now = `${mm}/${dd}/${yyyy}`

    const enterday = prompt('Enter Day').padStart(2, '0')
    const entermonth = prompt('Enter Month').padStart(2, '0')

    if(enterday>31){
        countertimer.style.display="none"
        heading.innerText=" Wrong Date "
    }
    else if(entermonth>12){
        countertimer.style.display="none"
        heading.innerText=" Wrong Month "
    }
    
    
    let targetdate = `${entermonth}/${enterday}/${yyyy}`

    if (now > targetdate) {
        targetdate = `${entermonth}/${enterday}/${yyyy + 1}`
        console.log(`${entermonth}/${enterday}/${yyyy + 1}`)

    }
    const intervalId = setInterval(() => {
        const timer = new Date(targetdate).getTime()
        const today = new Date().getTime()

        const diff = timer - today
        const leftday = Math.floor(diff / day)
        const lefthour = Math.floor((diff % day) / hour)
        const leftminute = Math.floor((diff % hour) / minute)
        const leftsec = Math.floor((diff % minute) / second)

        daysele.innerText = leftday
        hoursele.innerText = lefthour
        minutesele.innerText = leftminute
        secondsele.innerText = leftsec

       if(diff<0){
        countertimer.style.display="none"
        heading.innerText="Time's up "
        clearInterval(intervalId)
       }

    }, 0);

}
timerfxn()


