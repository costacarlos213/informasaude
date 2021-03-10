import React, { useContext } from 'react'
import { PaginationButtons, CircleButtonsDiv } from '../styles/pages/topic'
import { PaginationContext } from '../lib/context'

interface PaginationProps {
  total: number
}

const Pagination: React.FC<PaginationProps> = ({ total }) => {
  let index = 0
  let equal = false
  const [pageIndex, setPageIndex] = useContext(PaginationContext)

  const result = total / 6
  const roundedResult = Math.trunc(total / 6)

  result === roundedResult && (equal = true)
  result === 0 && (equal = false)

  if (equal) {
    index = total / 6
  } else {
    index = Math.trunc(total / 6) + 1
  }

  const array = []
  for (let i = 1; i <= index; i++) {
    if (pageIndex === i) {
      array.push(
        <PaginationButtons
          active={true}
          key={i}
          onClick={() => {
            setPageIndex(i)
          }}
        >
          {i}
        </PaginationButtons>
      )
    } else {
      array.push(
        <PaginationButtons
          active={false}
          key={i}
          onClick={() => {
            setPageIndex(i)
          }}
        >
          {i}
        </PaginationButtons>
      )
    }
  }

  return <CircleButtonsDiv>{array}</CircleButtonsDiv>
}

export default Pagination
