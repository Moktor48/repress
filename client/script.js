/* Completed Code First!
XXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXX
*/

// Arrays to hold months and days
const listMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let boxArray = [];
const dayLoop = () => {
    for (let i = 0; i < )
};
const monthLoop = () => {};

/* This blob determines the day of the week the 1st lands on, then numbers out the current month by iterating
the numbers in the calendar table */
const calBuild = () => {
    const nD = new Date();
    nD.setDate(1);
    const dayOfWeek = nD.getDay(); 
    const lastDay = new Date();
    let y = lastDay.getMonth();
    y++;
    lastDay.setMonth(y);
    lastDay.setDate(0);
    let z = lastDay.getDate();
    let x = dayOfWeek + z;
    a = 0;
    for (let i = dayOfWeek; i < x; i++) {
        a++
        document.getElementById(i).innerHTML = a;
    };
};

//Support function for MonthComp
const curMonth = () => {
    const nD = new Date();
    return listMonth[nD.getMonth()];
};

// Component for month line
class MonthComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <th>{curMonth()}</th>
            </tr>
        );
    }
};

// Component for day line
class DayComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                {weekDay.map((day) => {
                    return <th>{day}</th>;
                }
                )
                }
            </tr>
        );
    }
};

// Component for empty boxes
class BoxComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {boxArray.map((box) => {
                    return box;
                })}
            </div>
        );
    }
}

//Calendar array building function
const boxLoop = (rowAdd) => {

    boxArray.push('<tr>');
    for (let i = 0 + rowAdd; i < 7+ rowAdd; i++) {
        boxArray.push('<td id="' + i + '"></td>');
    };
    boxArray.push('</tr>');
    return boxArray;
};

const fullBox = () => {
    for (let i = 0; i < 42; i + 7) {
        boxLoop(i);
    } return boxArray;
    };

// Component to build the full table representing the calendar
class CalReact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table>
                    <MonthComp />
                    <DayComp />
                    <BoxComp />
            </table>
        );
    }
};



//import { createRoot } from 'react-dom/client';

/* Experimental Code HERE
XXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXX
*/

// boxArray ideas

boxArray.map(boxLoop(0));
boxArray.map(boxLoop(7));
boxArray.map(boxLoop(14));
boxArray.map(boxLoop(21));
boxArray.map(boxLoop(28));
boxArray.map(boxLoop(35));





return (
    <table>

    </table>
);

