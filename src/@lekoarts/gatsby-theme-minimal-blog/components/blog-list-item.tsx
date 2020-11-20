/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";

type BlogListItemProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    tags?: {
      name: string;
      slug: string;
    }[];
  };
  showTags?: boolean;
};

const getDate = date => {
  const d = date.split(".");
  return `${d[1]}.${d[0]}.${d[2]}`;
};

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <Box mb={4}>
    <Styled.a
      as={Link}
      to={post.slug}
      sx={{ fontSize: [1, 2, 3], color: `text` }}
    >
      {post.title}
    </Styled.a>
    <p
      sx={{
        color: `secondary`,
        mt: 1,
        a: { color: `secondary` },
        fontSize: [1, 1, 2]
      }}
    >
      <time>{getDate(post.date)}</time>
      {post.tags && showTags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
    </p>
  </Box>
);

export default BlogListItem;
