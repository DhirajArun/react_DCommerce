export function getRatingData(rating) {
    let multiplier = 5;
    const score = rating.reduce((a, v) => {
      const value = a + v * multiplier;
      multiplier -= 1;
      return value;
    });
  
    const totalRaters = rating.reduce((a, v) => a + v);
  
    const avgRating = ( Math.floor((score / totalRaters) * 10) ) / 10; 

    const starPercentage = [];
    starPercentage[0] = (rating[0] / totalRaters) * 100;
    starPercentage[1] = (rating[1] / totalRaters) * 100;
    starPercentage[2] = (rating[2] / totalRaters) * 100;
    starPercentage[3] = (rating[3] / totalRaters) * 100;
    starPercentage[4] = (rating[4] / totalRaters) * 100;

    return { totalRaters, avgRating, starPercentage };
  }

export default {getRatingData};
