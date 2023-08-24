/* eslint-disable react/display-name */
import React from 'react'
import { MDXLayout, ComponentMap } from 'pliny/mdx-components'
import { TOCInline } from 'pliny/ui/TOCInline'
import { Pre } from 'pliny/ui/Pre'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'

import Image from './Image'
import CustomLink from './Link'

const ImageCentered = (props) => (
  <div className="flex items-center justify-center ">
    <Image
      alt={props.alt}
      className="rounded-md"
      height={props.height || 762}
      src={props.src}
      width={props.width ?? 762}
      quality={100}
    />
  </div>
)

export const Wrapper = ({ layout, content, ...rest }: MDXLayout) => {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout content={content} {...rest} />
}

export const MDXComponents: ComponentMap = {
  ImageCentered,
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  wrapper: Wrapper,
  BlogNewsletterForm,
}
