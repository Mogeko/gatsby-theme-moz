import { css } from "linaria"
import {
  lightBackgroundColor,
  lightFontColor,
  lightGlobalLinkColor,
  lightPostLinkHoverColor,
} from "./variables"

import "normalize.css"

const CssBaseline = css`
  :global() {
    /** Font **/
    /* josefin-sans-regular && Libre Barcode 128 Text */
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Libre+Barcode+128+Text&display=swap");
    /* FiraCode */
    @import url("https://cdn.jsdelivr.net/npm/firacode@3.1.0/distr/fira_code.min.css");

    html {
      font-family: "Josefin Sans", -apple-system, BlinkMacSystemFont,
        "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", STHeiti,
        "Microsoft Yahei", "WenQuanYi Micro Hei", Arial, Verdana, sans-serif;
      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      &::-webkit-scrollbar-thumb {
        height: 40px;
        background-color: #eee;
        border-radius: 16px;
        &:hover {
          background-color: #ddd;
        }
      }
    }

    ::selection {
      background: #0095ff1a;
    }

    body {
      font-size: 11pt;
      font-weight: 400;
      line-height: 2em;
      background-color: ${lightBackgroundColor};
      color: ${lightFontColor};
      &:before {
        content: "";
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.05;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
        -o-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray;
      }
    }

    a {
      color: ${lightGlobalLinkColor};
      text-decoration: none;
      transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
        opacity 0.2s ease;
      &:hover {
        color: ${lightPostLinkHoverColor};
        text-decoration: none;
        transition: color 0.2s ease, border-color 0.2s ease,
          background 0.2s ease, opacity 0.2s ease;
      }
    }

    blockquote {
      font: 14px/22px normal helvetica, sans-serif;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-left: 2%;
      margin-right: 0%;
      padding-left: 15px;
      padding-top: 10px;
      padding-right: 10px;
      padding-bottom: 10px;
      border-left: 3px solid #ccc;
      background-color: #f1f1f1;
    }
  }
`

export default CssBaseline
