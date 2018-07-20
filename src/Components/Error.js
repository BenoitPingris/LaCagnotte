import React from 'react'
import { Alert } from 'reactstrap';

export default ({message}) => {
  return (
	<div>
	  <Alert color='danger'>{message}</Alert>
	</div>
  )
}
