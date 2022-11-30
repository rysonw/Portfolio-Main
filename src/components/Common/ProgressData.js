export const progressPercentage = (number) => {
  if (number === "40") {
    return `after:content-['70%']`;
  }
  if (number === "45") {
    return `after:content-['0%']`;
  }
  if (number === "15") {
    return `after:content-['20%']`;
  }
};
