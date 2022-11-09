import {graphql} from 'babel-plugin-relay/macro'
import {useEffect} from 'react'
import {useLazyLoadQuery} from 'react-relay'
import {useAuth} from '../../context/AuthContext'

export default function Viewer() {
  const auth = useAuth()

  const {viewer} = useLazyLoadQuery(
    graphql`
      query ViewerQuery {
        viewer {
          firstName
          lastName
          email
        }
      }
    `,
    {}
  )

  useEffect(() => {
    if (viewer) {
      auth.currentUser(viewer)
    }
  }, [viewer])
}
