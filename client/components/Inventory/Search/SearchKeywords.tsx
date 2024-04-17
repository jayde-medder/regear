interface props {
  keywords: string[]
  removeKeyword: (keyword: string) => React.MouseEventHandler<HTMLButtonElement>
}

export default function SearchKeywords({ keywords, removeKeyword }: props) {
  return (
    <>
      <ul>
        {keywords.map((keyword, index) => (
          <div key={index}>
            <p>{keyword}</p>
            <button onClick={removeKeyword(keyword)}>x</button>
          </div>
        ))}
      </ul>
    </>
  )
}
