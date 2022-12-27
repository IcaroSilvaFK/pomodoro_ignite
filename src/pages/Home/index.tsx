import { Link } from 'react-router-dom'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <button>Icaro</button>
      <Link to="/history">History</Link>
    </Container>
  )
}
