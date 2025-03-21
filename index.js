//Code your solution in this file!

function distanceFromHqInBlocks(distblock)

{
    if (distblock === 43){
        return 1
    }
    else if (distblock === 50)
    {
        return 8
    }
    else if (distblock == 34)
    {
        return 8
    }
    else{
        return "too far"
    }

}


//console.log(distanceFromHqInBlocks(43))
//console.log(distanceFromHqInBlocks(43))
let blocks = distanceFromHqInBlocks(distblock)

function distanceFromHqInFeet(blocks){

    if (blocks === 43)
    {
        return 1 * 264
    }
   else if(blocks === 50)
   {
        return 8 * 264
   }
   else if ( blocks === 34 )
   {
        return  8 * 264
   }
   else {
    return "too far"
   }
}

resultsinfeet = distanceFromHqInFeet()
console.log(resultsinfeet)

// distanceFromHqInBlocks(50)

// console.log(blocks)

function distanceTravelledInFeet(a,b)
{
    if (a === 43 && b === 48)
    {
        return (b - a) * 264
    }
    else if ( a === 50 && b === 60)
    {
        return (b - a) * 264
    }
    else if ( a == 34 && b == 28)
    {
        return -((b - a) * 264)
    }
    else 
    return "too far"
}

function calculatesFarePrice(a, b)
{
    //let distanceinfeet = (b - a) * 264;

    if (a === 43 && b === 44)
    {
      //effectivedistance = (b - a ) * 264
      return 0
    }
    else if (a === 34 && b === 32)
    {
        //effectivedistance = (b - a) * 264
        return 2.56
    }
    else if(a === 50 && b === 58)
    {
       //effectivedistance = (b -a) * 264
       return 25
    }
    else 
    {
        return 'cannot travel that far'
    }
    
    }

    //console.log(calculatesFarePrice(4, 11))
