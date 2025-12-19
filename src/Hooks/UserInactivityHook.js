const useUserInactivityHook = (time = 0.5 * 60 * 1000) => {
  console.log("coming to userInactivity");
  //how to capture userInactivity....
  //by checking their actions, mouse click, keyboard up, down, mousemove, scroll
  let timer;
  const resetTimer = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("UserTimedout");
      //setTImeout uses milliseconds so converting min to sec then sec to millisecond
      //1 sec = 1000 milli sec
    }, time);
    console.log(timer, "timer");
  };
  const actions = [
    "mousedown",
    "mousemove",
    "scroll",
    "keydown",
    "touchstart",
    "pointermove",
    "focus",
  ];
  actions.forEach((event) => {
    console.log("capture event", event);

    window.addEventListener(event, resetTimer);
  });
};

export default useUserInactivityHook;
