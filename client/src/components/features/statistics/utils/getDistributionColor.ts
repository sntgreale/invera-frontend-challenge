const distributionColorMock = [
  { type: "Organic", color: "#7b99ff" },
  { type: "Social", color: "#c9d7fd" },
  { type: "Direct", color: "#28e384" },
] as const;

export const getDistributionColor = (type: string): string => {
  const colorMap: Record<string, string> = Object.fromEntries(
    distributionColorMock.map((item) => [item.type.toUpperCase(), item.color])
  );

  return colorMap[type.toUpperCase()] || "#888888";
};
