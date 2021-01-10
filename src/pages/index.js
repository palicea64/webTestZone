import React from "react"
import Layout from "./components/layout"
import {ExampleButton} from "./components/button"

export default () => (
  <Layout>
    <h1 style={{color:"red",textTransform:"uppercase"}}>Hello from Gatsby</h1>
    <p className="text">Labore ad consequat aliquip anim nulla aliquip veniam consequat. Dolor incididunt ex aliqua nisi cillum cupidatat irure fugiat. 
      Anim nulla sint nisi duis duis pariatur sunt eu ea fugiat eiusmod laborum deserunt tempor. Pariatur voluptate anim laborum eiusmod
      ut do laboris est elit pariatur mollit. Sit mollit ex anim laboris do non ut eiusmod aute velit. Voluptate veniam velit fugiat minim
      ut minim sunt ut occaecat dolore sint exercitation. Magna magna occaecat do reprehenderit eiusmod labore consequat.
    </p>
    <ExampleButton>Click Me</ExampleButton>
  </Layout>
)