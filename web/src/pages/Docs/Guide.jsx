// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { MDXProvider } from "@mdx-js/react";
import MDContent from './Content.mdx'
import { ThemeContext } from "../../Context/ThemeContext";

const Guide = () => {

  const { theme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <main className="container py-[100px] mx-auto px-6">
        <article className={`prose ${theme.current_theme === 'dark' ? "prose-invert" : "" }`}>
          <MDXProvider>
            <MDContent />
          </MDXProvider>
        </article>
    </main>
  )

}
export default Guide;
