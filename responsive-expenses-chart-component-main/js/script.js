let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    let convertString = JSON.parse(this.responseText);

    /* day = convertString.map(function(elm){
      return elm.day;
    })
    amount = convertString.map(function(elm){
      return elm.amount;
    }) */

    //AMOUNT LIST
    const amountList = [
    function getSundayAmount(){
      let amount = convertString[0].amount;
      return amount;
    },

    function getMondayAmount(){
      let amount = convertString[1].amount;
      return amount;
    },

    function getTuesdayAmount(){
      let amount = convertString[2].amount;
      return amount;
    },

    function getWednesdayAmount(){
      let amount = convertString[3].amount;
      return amount;
    },

    function getThursdayAmount(){
      let amount = convertString[4].amount;
      return amount;
    },

    function getFridayAmount(){
      let amount = convertString[5].amount;
      return amount;
    },

    function getSatadayAmount(){
      let amount = convertString[6].amount;
      return amount;
    },
  ]

    // DAY LIST
    const dayList = [
    function getSundayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay();
        
          const sunday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  sunday.getDay();
          return dayList[result];
    },

    function getMondayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay() + 1;
        
          const monday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  monday.getDay();
          return dayList[result];
    },

    function getTuesdayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay() + 2;
        
          const tuesday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  tuesday.getDay();
          return dayList[result];
    },

    function getWednesdayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay() + 3;
        
          const wednesday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  wednesday.getDay();
          return dayList[result];
    },

    function getThursdayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay() + 4;
        
          const thursday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  thursday.getDay();
          return dayList[result];
    },

    function getFridayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay() + 5;
        
          const friday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  friday.getDay();
          return dayList[result];
    },

    function getSatadayOfCurrentWeek() {
          const today = new Date();
          const first = today.getDate() - today.getDay() + 6;
        
          const sataday = new Date(today.setDate(first));
          const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        
          let result =  sataday.getDay();
          return dayList[result];
    },
  ]

    function today(){
      let ada = new Date();
      let dinaya = ada.getDay();
      let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

      return week[dinaya];
    }

    // BAR COLORS
    function barSun(){
      if (dayList[0]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    function barMon(){
      if (dayList[1]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    function barTue(){
      if (dayList[2]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    function barWed(){
      if (dayList[3]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    function barThu(){
      if (dayList[4]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    function barFri(){
      if (dayList[5]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    function barSat(){
      if (dayList[6]() == today()){
        color = 'hsl(186, 34%, 60%)';
        return color;
      }else{
        color = 'hsl(10, 79%, 65%)';
        return color;
      }
    }

    // BAR  HOVER COLORS
    function barSunOpacity(){
      if (dayList[0]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7)';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

    function barMonOpacity(){
      if (dayList[1]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7)';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

    function barTueOpacity(){
      if (dayList[2]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7)';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

    function barWedOpacity(){
      if (dayList[3]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7))';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

    function barThuOpacity(){
      if (dayList[4]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7)';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

    function barFriOpacity(){
      if (dayList[5]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7)';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

    function barSatOpacity(){
      if (dayList[6]() == today()){
        color = 'hsla(186, 34%, 60%, 0.7)';
        return color;
      }else{
        color = 'hsla(10, 79%, 65%, 0.7)';
        return color;
      }
    }

      // tooltip setup
      const titleTooltip = function titleTooltip_each(item){
        return "";
      }

      // THE CHART
      const day = [
        { x: dayList[1](), y: amountList[0]()},
        { x: dayList[2](), y: amountList[1]()},
        { x: dayList[3](), y: amountList[2]()},
        { x: dayList[4](), y: amountList[3]()},
        { x: dayList[5](), y: amountList[4]()},
        { x: dayList[6](), y: amountList[5]()},
        { x: dayList[0](), y: amountList[6]()}
      ]

        const ctx = document.getElementById('chartGraph').getContext('2d'); 
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            // labels: day,
            datasets: [{
              data: day,
              backgroundColor: [barMon(),  barTue(), barWed(), barThu(),  barFri(), barSat(), barSun()],
              hoverBackgroundColor:  [ barMonOpacity(),  barTueOpacity(),  barWedOpacity(), barThuOpacity(),  barFriOpacity(), barSatOpacity(), barSunOpacity()],               
              borderWidth: 1,
              borderRadius: 5,
              borderSkipped: false,  
            }]
          },
            options: {
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                },
                tooltip: {
                  yAlign: 'bottom',
                  caretSize: 0,
                  bodyAlign: 'center',
                  displayColors: false,
                  callbacks: {
                    title: titleTooltip,
                    label: 
                    function(context){
                      let label = context.dataset.label || '';
                      if (label) {
                        label += ': ';
                      }
                      if(context.parsed.y !== null){
                        label += new Intl.NumberFormat ('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                      }
                      return label;
                    }
                  },
                  padding: 10,
                  backgroundColor: 'hsl(25, 47%, 15%)'
                }
              },
              scales: {
                x: {
                  grid: { 
                    display: false,
                    drawBorder: false
                  },
                  ticks: {
                    font: {
                      family: "'DM Sans', sans-serif",
                    },
                    color: 'hsl(28, 10%, 53%)'
                  },
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    display: false,
                    border: false
                  },
                  ticks: {
                    display: false,
                  },
                  grace: 8,
                  display: false,
                }
              },
              onHover: (event, chartElement) => {
                // console.log(chartElement);
                // console.log(event);
                if(chartElement.length == 1){
                  event.native.target.style.cursor = "pointer";
                }else if(chartElement.length == 0){
                  event.native.target.style.cursor = "default";
                }
                // event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
              }
            }
        });

    // TOTAL BALANCE and AMOUNT INFO
    const myBalanceElement = document.getElementById("amount");
    const myAmountElement = document.getElementById("total-amount");

    let totalBalance = 921.48;
    let totalAmount = 478.33;

    function convertToUSDbalance(){
      totalBalance = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(totalBalance);
      return totalBalance;
    }
    myBalanceElement.innerHTML =  convertToUSDbalance();

    function convertToUSDamount(){
      totalAmount = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(totalAmount);
      return totalAmount;
    }
    myAmountElement.innerHTML =  convertToUSDamount();

    // TOTAL AMOUNT INFO
/*     const totalAmount = document.getElementById("total-amount");

    var jsonAmounts = convertString.map((element) => {
      return element.amount;
    })
    let sum = jsonAmounts.reduce(addFunc);
    function addFunc(toatal, value, index, arr){
      return toatal + value;
    }
    totalAmount.innerHTML = sum */;
  }
}

xmlhttp.open("GET", "./data/data.json");
xmlhttp.send();



/*     let dayEach;
    let amountEach;
    for(let i=0; i<convertString.length; i++){
      console.log(convertString[1].day);
      dayEach = convertString[i].day;
      amountEach = convertString[i].amount;
      if(i == 0){
        console.log(amountEach);
        console.log(dayEach); 
        return amountEach;
      }else if(i == 1){

        return amountEach;
      }else if(i == 2){

        return amountEach;
      }else if(i == 3){

        return amountEach;
      }else if(i == 4){

        return amountEach;
      }else if(i == 5){

        return amountEach;
      }else if(i == 6){

        return amountEach;
      }
    } */

    // console.log(amount[0]);
    // console.log(typeof (amount));
    /* amount = convertString.forEach((elm) => {
      console.log(typeof (elm));
      return elm.amount;
    }) */
    // console.log(day);
    // console.log(amount);


