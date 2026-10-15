import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag1: 1,
    tag2: "satisfied",
    intro: "This section highlights user satisfaction by explaining how the experience meets expectations, delivers value, and creates a positive impression for everyone."
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag1: 2,
    tag2: "understandable",
    intro: "This section explains important concepts in simple language, making information easy to understand, follow, and remember for readers of all backgrounds."
  },
  {
    img: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag1: 3,
    tag2: "underbaned",
    intro: "This introduction presents the main topic, shares essential background information, and helps readers understand what to expect from the content ahead."
  },
  {
    img: "https://images.unsplash.com/photo-1770060539901-7e34dd8db9e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    tag1: 4,
    tag2: "introduction",
    intro: "This overview introduces the subject clearly, outlines its purpose, and provides readers with useful context before exploring the details in depth."
  }
];
   

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App