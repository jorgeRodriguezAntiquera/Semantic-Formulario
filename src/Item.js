import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemExampleItems = () => (
  <Item.Group>
    <Item>
      

      <Item.Content>
        
        <Item.Image size='medium' align-item= 'left' src='https://es.cloudera.com/content/dam/www/static/images/logos/cloudera-card.jpg' />
        <Item.Header as='a' align-item= 'left' height="100">Cloudera</Item.Header>
        <Item.Meta><h1>En Cloudera, creemos que los datos abren el 
          camino hacia un futuro que hoy parecería imposible.<br/></h1>

 <h2>
 Partiendo de ese objetivo, ofrecemos una Enterprise Data Cloud con servicios nativos de la nube que permiten gestionar y proteger todo el ciclo de vida de los datos, desde la recopilación hasta la experimentación, desde el origen hasta la IA, en cualquier nube o centro de datos.<br/></h2><br/><h2>Cloudera te invita a participar a un concurso gratuito, donde el ganador podra tener un curso completo de cloudera manager y el ganador tendra una certificacion de data science a eleccion.</h2></Item.Meta>

        <Item.Description>
          
        </Item.Description>
        
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemExampleItems