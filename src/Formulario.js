import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleUnstackableGroup = () => (
  <Form>
    <Form.Group unstackable widths={2}>
      <Form.Input label='Nombre' placeholder='Nombre' />
      <Form.Input label='Apellido' placeholder='apellido' />
    </Form.Group>
    <Form.Group widths={2}>
      <Form.Input label='email' placeholder='email' />
      <Form.Input label='Telefono' placeholder='Telefono' />
    </Form.Group>
    <Form.Checkbox label='Acepto los terminos y las condiciones' />
    
  </Form>
)

export default FormExampleUnstackableGroup