function countTime(leds) {
  const zerosArray = leds.join("").split("1")
  zerosArray[0] += zerosArray.pop()

  const sorteredArray = zerosArray.sort((a, b) => 
    b.length - a.length
  )

  return sorteredArray[0].length * 7
}

function countTimeAlt(leds) {
  let arr = leds.join("").split("1")
  arr[0] += arr.pop()
  return Math.max(...arr.map((led) => led.length)) * 7
}

module.exports = countTime