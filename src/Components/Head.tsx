import React from "react";
import { IHead } from "../Models/Head";

const Head = (props: IHead) => {
  React.useEffect(() => {
    document.title = `${props.title} | ${props.project}`;
    const docSelect = document.querySelector("meta[name='description']");
    if (docSelect != null)
      docSelect.setAttribute("content", props.description || "");
  }, [props]);
  return <></>;
};

export default Head;
