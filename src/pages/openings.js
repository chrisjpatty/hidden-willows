import React from 'react'
import { withRouteData } from 'react-static'

const Openings = ({openings}) => {
  const ops = openings.map(op => op.data)
  console.log(ops);
  return (
    <div className="openings">
      {
        ops.map((op, i) => (
          <OpeningBlock {...op} key={i} />
        ))
      }
    </div>
  )
}
export default withRouteData(Openings)

const OpeningBlock = ({name, phone}) => (
  <div className="opening-block">
    <span className="name">{name}</span>
    <span className="phone">{phone}</span>
  </div>
)
