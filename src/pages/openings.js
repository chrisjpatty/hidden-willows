import React from 'react'
import { withRouteData, Head } from 'react-static'
import Title from '../components/Title'

const Openings = ({openings}) => {
  const ops = openings.map(op => op.data)
  return (
    <div className="flex-column">
      <Head>
        <title>Openings | Hidden Willows Townhomes</title>
      </Head>
      <Title className="opening-title">Openings</Title>
      {
        ops.length > 0 ?
        ops.map((op, i) => (
          <OpeningBlock {...op} key={i} />
        ))
        :
        <p>There currently no openings. Check back later.</p>
      }
    </div>
  )
}
export default withRouteData(Openings)

const OpeningBlock = ({name, phone}) => (
  <div className="opening-block">
    <span className="name">{name}</span>
    <a href={`tel:${phone}`}>
      <span className="phone">{phone}</span>
    </a>
  </div>
)
