var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
  const solve = (landStartTime, landDuration, waterStartTime, waterDuration) => {
    const minFinish = Math.min(...landStartTime.map((start, i) => start + landDuration[i]))

    return Math.min(
      ...waterStartTime.map((start, i) => Math.max(start, minFinish) + waterDuration[i])
    )
  }

  const landWater = solve(landStartTime, landDuration, waterStartTime, waterDuration)
  const waterLand = solve(waterStartTime, waterDuration, landStartTime, landDuration)
  return Math.min(landWater, waterLand)
}
