export const progressPercentage = (number) => {
  if (number === "60") {
    return `after:content-['80%']`;
  }
  if (number === "45") {
    return `after:content-['0%']`;
  }
  if (number === "15") {
    return `after:content-['20%']`;
  }
};
