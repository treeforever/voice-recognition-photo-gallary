export function turnOnMic () {
  console.log('touched')
  return {
    type: 'TURN_ON_MIC'
  }
}

export function turnOffMic () {
  return {
    type: 'TURN_OFF_MIC'
  }
}
