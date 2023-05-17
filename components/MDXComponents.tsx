/* eslint-disable react/display-name */
import React from 'react'
import { MDXLayout, ComponentMap } from 'pliny/mdx-components'
import { TOCInline } from 'pliny/ui/TOCInline'
import { Pre } from 'pliny/ui/Pre'
import { BlogNewsletterForm } from 'pliny/ui/NewsletterForm'

import Image from './Image'
import CustomLink from './Link'

const ImageCentered = (props) => (
  <div className="flex items-center justify-center">
    <img src={props.src} alt={props.alt} />
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
