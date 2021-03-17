const NumberOfBulbs = 50;
const BLINKING_SPEED = 500;
const BulbIndex = 10;

let bulbs = [];
let counter = 0;

document.getElementById(`start-btn`).addEventListener(`click`, () => {
    const userInput = document.getElementById(`speed`).value,
        blinkingSpeed = userInput ? userInput : BLINKING_SPEED, bulbCount = document.getElementById(`bulbCount`).value;

    while (counter < bulbCount) {
        const newBulb = document.createElement(`div`);
        newBulb.className = `bulb`;
        document.getElementById(`light-bulbs`).appendChild(newBulb);

        bulbs[counter] = false;
        counter++;
    }

    counter = 0
    document.getElementsByClassName(`bulb`)[counter].classList.add(`active`);
    bulbs[counter] = true;

    document.getElementsByClassName(`bulb`)[BulbIndex].classList.add(`chosen`);

    const timer = setInterval(() => {
        document.getElementsByClassName(`bulb`)[counter].classList.remove(`active`);


        bulbs[counter] = false;

        if (counter < NumberOfBulbs - 1) {
            counter++;

        } else {
            counter = 0;
        }

        bulbs[counter] = true;
        document.getElementsByClassName(`bulb`)[counter].classList.add(`active`);

    }, blinkingSpeed);

    document.getElementById('stop-btn').addEventListener('click', () => {
        clearInterval(timer);

        if (document.querySelector(`.active.chosen`) && counter === BulbIndex) {
            alert(`Congratulation!You win!`);
        } else {
            alert(`Try again!No Win!`);
        }
    })

    //
    /**
        * You don't have to care about this fn unless you want to
        * @param {NodeList} nodes the list of elements to be arranged in a circle
        * @return {void}
        */
    const arrangeBulbsInACircle = nodes => {
        const radius = '12em',
            start = -90,
            $els = [...nodes], // turn nodelist into a real array
            numberOfEls = $els.length,
            slice = 360 / numberOfEls;

        $els.forEach((el, index) => {
            const rotate = slice * index + start;
            const rotateReverse = rotate * (-1);

            el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
        })
    }

    // invoke the fn on the class bulb elements to create the effect
    arrangeBulbsInACircle(document.getElementsByClassName('bulb'));
})
//document.getElementsByClassName(`bulb`)[counter].classList.add(`active`);
//document.getElementsByClassName(`bulb`)[WINNING_BULB_INDEX].classList.add(`chosen`);
//
//setInterval(() => {
//    arrayOfBulbs[counter] = false;
//    document.getElementsByClassName(`bulb`)[counter].classList.remove(`active`);
//
//    if (counter < NUMBER_OF_BULBS - 1) {
//        counter++;
//    } else {
//        counter = 0;
//    }
//
//    arrayOfBulbs[counter] = true;
//    document.getElementsByClassName(`bulb`)[counter].classList.add(`active`);
//
//    console.clear();
//    console.log(arrayOfBulbs);
//
//}, DELAY);
//

//   // TODO: stop the blinking and announce if user has //won the game})

