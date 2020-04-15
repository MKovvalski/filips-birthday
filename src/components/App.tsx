import React, { useState, useEffect } from 'react'

const ControlledInput = ({ value, onChange, onClick, disabled = false, placeholder = 'eight letters' }: any) =>
  <input
    className="form-control"
    type="text"
    value={value}
    onChange={onChange}
    onClick={onClick}
    name="widget-url"
    id="widget-url"
    autoComplete="off"
    autoFocus
    disabled={disabled}
    placeholder={placeholder}
  />

const GateOne = ({ open }: { open: boolean }) => {
  const [openGates, setOpenGates] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpenGates(true)
      }, 2000)
    }
  }, [open])

  return (
    <div className='gate-one-wrapper'>
      <div className={`gate-left ${openGates ? 'move-left' : null}`}/>
      <div className={`gate-right ${openGates ? 'move-right' : null}`}/>
    </div>
  )
}

const GateTwo = ({ open }: { open: boolean }) => {
  const [openGates, setOpenGates] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpenGates(true)
      }, 4000)
    }
  }, [open])

  return (
    <div className='gate-two-wrapper'>
      <div className={`gate-up ${openGates ? 'move-up' : null}`}/>
      <div className={`gate-down ${openGates ? 'move-down' : null}`}/>
    </div>
  )
}

const Wishes = () => {
  return (
    <div className="trophy-wrapper">
      <div className="wrapper">
        <div className="award-wrapper">
          <img src="./assets/award.png" alt="aaaaward"/>
        </div>
        <div className="pillar">
          <div className="t1">Happy birthday!</div>
          <div className="t2">25 years of being an absolute homosexual and still going. A solid achievement</div>
          <div className="t5">
            <div className="t3">Sending all the love</div>
          </div>
          <div className="t4">*all wishes are subject to strict #noHomo policy established with accordance to GPDR</div>
        </div>
        <div className="pillar-bar" />
      </div>
    </div>
  )
}

const Pass = ({ value, onChange, disabled, vanish }: any) => {
  return (
    <div className={`pass-wrapper ${vanish ? 'vanish' : null}`}>
      <div className='inner-wrapper'>
        <div className='w1'>The way we used to call your house in Warsaw</div>
        <ControlledInput value={value} onChange={onChange} disabled={disabled} />
      </div>
    </div>
  )
}

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [trigger, setTrigger] = useState<boolean>(false);

  useEffect(() => {
    if (value === 'donvilla') {
      setTrigger(true)
    }
  }, [value])

  const setInputValue = (event: any) => {
    setValue(event.target.value)
  }

  return (
    <div className='app'>
      <GateOne open={trigger} />
      <GateTwo open={trigger} />
      <Wishes />
      <Pass value={value} onChange={setInputValue} vanish={trigger} disabled={trigger} />
    </div>
  )
}

export default App
