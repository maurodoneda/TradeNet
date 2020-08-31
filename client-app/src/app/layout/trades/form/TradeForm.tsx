import React from 'react'
import { Segment, Form } from 'semantic-ui-react'

export const TradeForm = () => {
    return (
      <Segment>
          <Form>
            <Form.Input placeholder='Title'/>
            <Form.Input placeholder='Description'/>
            <Form.Input placeholder='Date'/>
            <Form.Input placeholder='Typ e'/>
            <Form.Input placeholder='Asset'/>
            <Form.Input placeholder='Market'/>
        </Form> 
      </Segment>
    )
}
