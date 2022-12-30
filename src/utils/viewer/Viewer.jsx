import {useEffect} from 'react'
import {graphql, useLazyLoadQuery} from 'react-relay'
import {useAuth} from '../../context/AuthContext'

export default function Viewer() {
  const auth = useAuth()

  const {viewer} = useLazyLoadQuery(
    graphql`
      query ViewerQuery {
        viewer {
          person {
            firstName
            lastName
          }
        }
      }
    `,
    {}
  )

  useEffect(() => {
    console.log(viewer)
    if (viewer) {
      auth.currentUser(viewer.person)
    }
  }, [viewer])
}
