import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      

      <Item.Content>
        
        <Item.Image size='medium' align-item= 'left' src='https://es.cloudera.com/content/dam/www/static/images/logos/cloudera-card.jpg' />
        <Item.Header as='a' align-item= 'left' height="100">Cloudera</Item.Header>
        <Item.Meta>Cloudera te invita a participar a un concurso gratuito, donde el ganador podra tener un curso completo de cloudera manager, con algunas de las certificacioens existentes de data science.</Item.Meta>

        <Item.Description>
          
        </Item.Description>
        
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemExampleItems