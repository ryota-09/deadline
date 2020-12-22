'use strict';

    function countdown(due) {
        const now = new Date();

        const rest = due.getTime() - now.getTime();
        const sec = Math.floor(rest / 1000) % 60;
        const min = Math.floor(rest / 1000 / 60) % 60;
        const hours = Math.floor(rest / 1000 / 60 / 60 ) % 24;
        const days = Math.floor(rest / 1000 / 60 / 60 / 24);
        const count = [days, hours, min, sec];

        return count;
    }

    document.getElementById('form').onsubmit = function(event) {
     event.preventDefault();

     document.getElementById('output').textContent = document.getElementById('form').deadline.value + "まで";
     const yearnum = document.getElementById('form').year.value;
     const monthnum = document.getElementById('form').month.value;
     const daynum = document.getElementById('form').day.value;

     const goal = new Date(yearnum, monthnum - 1, daynum);

     console.log(countdown(goal));

     function recalc() {
        const counter = countdown(goal);
        document.getElementById('day').textContent = counter[0];
        document.getElementById('hour').textContent = counter[1];
        document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
        document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
        refresh();
     }

     function refresh() {
       setTimeout(recalc, 1000);
     }

     recalc();
    }