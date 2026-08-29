'use client'

import { useState } from 'react'
import { PartyCursor1 } from './party/PartyCursor1'
import { PartyCursor2 } from './party/PartyCursor2'

export let CheckButtons: (buttons: { [id: string]: boolean }) => void

export function PartyMode() {
  const [party1, setParty1] = useState(false)
  const [party2, setParty2] = useState(false)

  CheckButtons = (buttons) => {
    const p1 =
      buttons['I am'] &&
      buttons['I feel'] &&
      buttons['I do'] &&
      buttons['I love'] &&
      buttons['I speak'] &&
      buttons['I see'] &&
      buttons['I know']
    const p2 = p1 && buttons['Structure and motion']

    if (party1 !== p1) setParty1(p1)
    if (party2 !== p2) setParty2(p2)
  }

  return (
    <>
      {party1 && <PartyCursor1 />}
      {party2 && <PartyCursor2 />}
    </>
  )
}
