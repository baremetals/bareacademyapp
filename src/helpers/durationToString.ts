const durationToString = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    const minutesString = minutes > 0 ? `${minutes} mins, ` : "";
    const secondsString = seconds > 0 ? `${seconds} secs` : "";
    return `${minutesString}${secondsString}`;
  };

export default durationToString;