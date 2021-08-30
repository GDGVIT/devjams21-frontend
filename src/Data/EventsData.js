// Don't change class names as CSS styles are associated with it

const events = {
  devjams: {
    name: "DevJams'21",
    dateRange: 'To Be Announced',
    month: '',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit praesentium facilis non placeat nisi inventore sapiente nulla alias dolores',
    classname: 'devjams-grid'
  },
  devtalks: {
    name: 'DevTalks 21',
    date: '19th Sep 2021',
    content:
      'Interact and meet with a few of the most prestigious and renowned figures in the ever-changing tech industry!',
    // borderColor: "#E3E3FF",
    // bgColor: "rgba(216, 61, 52, 0.06)",
    classname: 'devtalks-grid',
    coords: { circle1: '-top-32 -right-0', circle2: '-bottom-20 left-0' }
  },
  knockathon: {
    name: 'Knockathons 21',
    date: 'To Be Announced',
    content:
      'Have what it takes to be a winner? Team up with your friends to solve an innovative problem and pitch your ideas while competing against other teams to come out on top!',
    // bgColor: "rgba(24, 26, 175, 0.17)",
    // borderColor: "#1F1F1F",
    classname: 'knockathon-grid',
    coords: { circle1: '-top-32 -right-20', circle2: '-bottom-20 -left-20' }
  },
  ctf: {
    name: 'DeconstruCTF',
    date: 'To Be Announced',
    content:
      'A 24 hour jeopardy style CTF, ranging to five different domains, namely, web, forensics, cryptography, OSINT and miscellaneous!',
    // bgColor: "rgba(76, 137, 255, 0.08)",
    // borderColor: "#1F1F1F",
    classname: 'ctf-grid',
    coords: { circle1: '-top-0 -right-32', circle2: '-bottom-20 -left-20' }
  },
  designzzz: {
    name: 'Hexathon',
    date: 'To Be Announced',
    content:
      'Channel your inner passion and creativity to create innovative and ingenious design solutions to current problems and win exciting prizes!',
    // bgColor: "rgba(0, 91, 56, 0.1)",
    // borderColor: "#1F1F1F",
    classname: 'designzzz-grid',
    coords: { circle1: '-top-32 -right-32', circle2: 'bottom-10 -left-20' }
  }
}

export default events
