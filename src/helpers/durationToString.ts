const durationToString = (duration: number) => {
  const hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  if (seconds > 0)
    minutes++;

    const hoursString = hours > 0 ? `${hours} h ` : '';
    const minutesString = minutes > 0 ? `${minutes} min ` : "";
    // const secondsString = seconds > 0 ? `${seconds}sec` : "";
    return `${hoursString}${minutesString}`;
  };

export default durationToString;