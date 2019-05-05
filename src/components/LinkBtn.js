import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from 'react-bootstrap'

const LinkBtn = ({ to, label }) => {
  return (
    <Link to={to}>
      <Button size={'lg'}>{label}</Button>
    </Link>
  )
}

export default LinkBtn
