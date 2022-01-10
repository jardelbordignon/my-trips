import NextLink, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'

export interface ILink extends LinkProps {
  children: ReactElement
  href: string
  className?: string
  unlessCurrent?: boolean
  exact?: boolean
}

export const Link = ({
  children,
  href,
  unlessCurrent = false,
  exact = false,
  className = '',
  ...rest
}: ILink) => {
  const { asPath } = useRouter()

  const strHref = String(href)
  const isActive = exact ? asPath === strHref : asPath.startsWith(strHref)

  if (isActive && unlessCurrent) return null

  if (isActive) {
    className = className ? (className += ' active') : 'active'
  }

  return (
    <NextLink href={strHref} {...rest}>
      {cloneElement(children, {
        className
      })}
    </NextLink>
  )
}
