import { useRouter } from 'next/router'

const Ask = () => {
  const router = useRouter()
  const { id } = router.query

  return <iframe className="videoask" src={"https://www.videoask.com/"+id} allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"/>
}

export default Ask
