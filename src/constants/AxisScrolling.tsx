import { useRef } from "react";
import useParallax from "../funcs/UseParallax";
import { useScroll, useTransform } from "framer-motion";

export default function AxisSrolling (
  axisName: string,
  distance: number,
  yRange: number[],
  opacityRange: number[],
) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const axis = useParallax(scrollYProgress, distance)
  const opacity = useTransform(axis, yRange, opacityRange)
  if (axisName === "x") {
    const xAxis = axis
    const xOpacity = opacity
    return { ref, xAxis, xOpacity}
  } else if (axisName === "y") {
    const yAxis = axis
    const yOpacity = opacity
    return { ref, yAxis, yOpacity}
  } else if (axisName === "z") {
    const zAxis = axis
    const zOpacity = opacity
    return { ref, zAxis, zOpacity}
  } else { throw new Error(`Правильно выбирай ось ${axisName}`) }
}