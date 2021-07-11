'use strict'
let times=['6AM ','7AM ','8AM ','10AM ','11AM ','12PM ','1PM ','3PM ','4PM ','5PM ','6PM ','7PM '];

let seattle = {
    cityName:"Seattle",
    minimum:23,
    maximum:65,
    avgerage:6.3,
    theHoleCookies:0 ,
    cutomerPerTimes:[],
    avgPerTimes:[],
    Customers:function(){
    
        for (let x = 0; x < times.length; x++) {
            this.cutomerPerTimes.push(Math.floor(Math.random()* (this.maximum - this.minimum) ) + this.minimum);
        }
    }

let Tokyo = {
    cityName:"Tokyo",
    minimum:3,
    maximum:24,
    avgerage:1.2,
    theHoleCookies:0 ,
    cutomerPerTimes:[],
    avgPerTimes:[],
    Customers:function(){
    
        for (let x = 0; x < times.length; x++) {
            this.cutomerPerTimes.push(Math.floor(Math.random()* (this.maximum - this.minimum) ) + this.minimum);
        }
    }

let Dubai = {
    cityName:"Dubai",
    minimum:11,
    maximum:38,
    avgerage:3.7,
    theHoleCookies:0 ,
    cutomerPerTimes:[],
    avgPerTimes:[],
   
    Customers:function(){
    
        for (let x = 0; x < times.length; x++) {
            this.cutomerPerTimes.push(Math.floor(Math.random()* (this.maximum - this.minimum) ) + this.minimum);
        }
    }

let Paris = {
    cityName:"Paris",
    minimum:20,
    maximum:38,
    avgerage:2.3,
    theHoleCookies:0 ,
    cutomerPerTimes:[],
    avgPerTimes:[],
   
    Customers:function(){
    
        for (let x = 0; x < times.length; x++) {
            this.cutomerPerTimes.push(Math.floor(Math.random()* (this.maximum - this.minimum) ) + this.minimum);
        }
    }


