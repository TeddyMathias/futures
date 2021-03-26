import { useRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'
import Link from 'next/link'

const Ask = () => {
  const router = useRouter()
  const { id } = router.query

  return (<div>
    <Navbar fixed="top" bg="light">
      <Link href="/asks">
        <Navbar.Brand href="/asks">&larr;</Navbar.Brand>
      </Link>
    </Navbar>
    <iframe className="videoask" src={"https://www.videoask.com/" + id} allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;" />
  </div>
  )
}

export default Ask
