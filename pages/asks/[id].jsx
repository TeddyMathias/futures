import { useRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'

const Ask = () => {
  const router = useRouter()
  const { id } = router.query

  return (<div>
    <Navbar fixed="top" bg="light">
      <Navbar.Brand href="/asks">Back</Navbar.Brand>
    </Navbar>
    <iframe className="videoask" src={"https://www.videoask.com/" + id} allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" />
  </div>
  )
}

export default Ask
