import { styled } from "linaria/react"
import {
  lightPostLinkColor,
  lightPostLinkHoverColor,
} from "../../styles/variables"

const Paragraph = styled.p``

const H1 = styled.h1``

const H2 = styled.h2``

const H3 = styled.h3``

const H4 = styled.h4``

const H5 = styled.h5``

const H6 = styled.h6``

const Blockquote = styled.blockquote``

const List = styled.ul``

const OrderList = styled.ol``

const ListItem = styled.li``

const Table = styled.table``

const TableRow = styled.tr``

const TableHeader = styled.th``

const TableData = styled.td``

const Emphasis = styled.em``

const Strong = styled.strong``

const Delete = styled.del``

const InlineCode = styled.code``

const Link = styled.a``

const Image = styled.img``

const components = {
  p: Paragraph,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  H6: H6,
  blockquote: Blockquote,
  ul: List,
  ol: OrderList,
  li: ListItem,
  table: Table,
  tr: TableRow,
  th: TableHeader,
  td: TableData,
  em: Emphasis,
  strong: Strong,
  delete: Delete,
  inlineCode: InlineCode,
  a: Link,
  img: Image,
}

export default components
