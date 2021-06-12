import React from 'react'
import { VFC } from 'react'

type Props = {
  children?: React.ReactNode
}

const Layout: VFC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default Layout
