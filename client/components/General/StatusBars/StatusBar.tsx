interface Props {
  message: string
  colour: string
}

const StatusBar = ({ message, colour }: Props) => {
  return (
    <div
      style={{
        backgroundColor: colour,
        color: 'white',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      {message}
    </div>
  )
}

export default StatusBar
