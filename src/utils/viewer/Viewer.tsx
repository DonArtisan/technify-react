import {useEffect} from 'react'
import {graphql, useLazyLoadQuery} from 'react-relay'
import {useAuth} from '../../context/AuthContext'
import {ViewerQuery} from './__generated__/ViewerQuery.graphql'

export default function Viewer() {
  const auth = useAuth()

  const {viewer} = useLazyLoadQuery<ViewerQuery>(
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
    if (viewer) {
      auth.currentUser(viewer.person)
    }
  }, [viewer])
}
