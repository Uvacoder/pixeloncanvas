import React from "react"

import styled from "styled-components"

const Sketch = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 4px;

  .sketch-title {
    text-transform: uppercase;
    font-size: 1.25rem;

    span {
      font-weight: 400;
    }
  }

  .gatsby-image-wrapper,
  video {
    margin: 1.25rem 0 1.5rem 0;
  }

  .sketch-text-content {
    ul {
      list-style: none;
      list-style-position: inside;

      li {
        margin: 1rem 0;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }

    p {
      margin: 1rem 0;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`

export default ({ children }) => {
  return <Sketch>{children}</Sketch>
}
