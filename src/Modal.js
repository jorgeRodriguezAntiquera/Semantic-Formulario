
import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function ModalExampleTopAligned() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Enviar</Button>}
    >
      <Modal.Header>Gracias por participar</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Esta partipando en nuestro concurso, al ganador se le informara por medio de email y/o llamada.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleTopAligned