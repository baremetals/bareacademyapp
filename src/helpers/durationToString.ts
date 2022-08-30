const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  const minutesString = minutes > 0 ? `${minutes} min, ` : "";
  const secondsString = seconds > 0 ? `${seconds} sec` : "";
  return `${minutesString}${secondsString}`;
};

export default durationToString;
