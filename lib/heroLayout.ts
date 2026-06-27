export const heroLayout = {
  phone:    { top: "18%", left: "8%",  rotate: -10, z: 5, width: 190 },
  laptop:   { top: "5%",  right: "6%", rotate: -6,  z: 6, width: 280 },
  camera:   { bottom: "0%", left: "20%", rotate: -8, z: 6, width: 150 },
  hope:     { top: "60%", left: "8%",  rotate: -10, z: 6, width: 170 },
  polaroid: { bottom: "6%", right: "6%", rotate: 4, z: 5, width: 220 },
  vinyl:    { top: "3%", left: "calc(50% - 185px)", rotate: 4, z: 4, width: 370 },
  mobile: {
    phone:    { top: "16%", left: "2%",  rotate: -10, z: 5, width: 110 },
    laptop:   { top: "3%",  right: "4%", rotate: -6,  z: 4, width: 125 },
    camera:   { bottom: "10%", left: "4%", rotate: -8, z: 5, width: 95 },
    hope:     { top: "62%", left: "2%",  rotate: -10, z: 5, width: 105 },
    polaroid: { bottom: "15%", right: "4%", rotate: 4, z: 5, width: 115 },
    vinyl:    { top: "18%", left: "calc(50% - 90px)", rotate: 4, z: 7, width: 180 },
  },
} as const
