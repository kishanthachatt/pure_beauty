import * as React from "react";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  ProcessingInstruction,
} from "html-react-parser";

import { ContentProps as Props } from "./Content.interface";

import cn from "./Content.module.scss";

export function Content(props: Props) {
  const removeImgTags = (node: any) => {
    if (node.type === "tag" && node.name === "img") {
      return "";
    }
    return undefined;
  };

  const parsedHtml = parse(props.data, {
    replace: (domNode: any) => {
      return domToReact(domNode, {
        processingInstructions: [removeImgTags],
      });
    },
  } as HTMLReactParserOptions);

  return <div className={cn.contentContainer}>{parsedHtml}</div>;
}
