
export const startTimer = (baseTime = 0) => {
  console.log("xxxx enter action xxx")
    return {
      type: "START_TIMER",
      baseTime: baseTime,
      now: new Date().getTime()
    };
  }
  
  export const stopTimer = () => {
    return {
      type: "STOP_TIMER",
      now: new Date().getTime()
    };
  }
  
  export const resetTimer = () => {
    return {
      type: "RESET_TIMER",
      now: new Date().getTime()
    }
  }