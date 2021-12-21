import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  Main,
  MdInputWrapper,
  TextArea,
  ToggleWrapper,
  SunIcon,
  MoonIcon,
  ButtonToggler,
  Preview,
  InfoIcon,
} from "./StyledElements";
export const MarkdownComponent = () => {
  const [dark, setDark] = useState(true);
  const [mdText, setMdText] = useState("");
  const handleChange = (e) => {
    setMdText(e.target.value);
    localStorage.setItem("text", e.target.value);
  };

  return (
    <Main>
      {/* position: absolute theme toggle  */}
      <div className="absolute-box">
        <ToggleWrapper
          onClick={() => {
            setDark(!dark);
          }}
          dark={dark}
        >
          <ButtonToggler dark={dark} />
          <SunIcon dark={dark} />
          <MoonIcon dark={dark} />
        </ToggleWrapper>
      </div>
      <div className="infoSection">
        <a
          href="https://www.markdownguide.org/basic-syntax/"
          title="To learn markdown click on this i button"
          target="_blank"
          rel="noreferrer"
        >
          <InfoIcon dark={dark} href="https://www.google.com" />
        </a>
      </div>
      {/* left-half markdown editor  */}
      <MdInputWrapper>
        <TextArea
          onChange={handleChange}
          dark={dark}
          name="md-inp"
          id="md-inp"
          value={
            localStorage.getItem("text").length !== 0
              ? localStorage.getItem("text")
              : " "
          }
          placeholder="📝 start writing here... (in markdown format)"
        ></TextArea>
      </MdInputWrapper>
      {/* right-side preview */}
      <Preview dark={dark}>
        <ReactMarkdown
          className="preview"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          skipHtml={false}
          sourcePos={true}
        >
          {localStorage.getItem("text").length !== 0
            ? localStorage.getItem("text")
            : mdText}
        </ReactMarkdown>
      </Preview>
    </Main>
  );
};
