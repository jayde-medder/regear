interface props {
  keywords: string[]
  handleClick: (keyword: string) => void
}

export default function Keywords({ keywords, handleClick }: props) {
  return (
    <>
      {keywords.map((keyword, index) => (
        <div key={index}>
          <p>{keyword}</p>
          <button onClick={() => handleClick(keyword)}>x</button>
        </div>
      ))}
    </>
  )
}
