import React, { useRef, useEffect } from 'react'
import Accordion from 'accordion-js'
import '../Styles/Faq.css'
import Baner from '../Components/Baner'

const Accordian = ({ color, question, answer, darkTheme }) => {
  return (
    <div className={`ac ${color}`}>
      <h2 className={`ac-header ${darkTheme ? 'bg-gray-800' : ''}`}>
        <button className='ac-trigger font-sora'>{question}</button>
      </h2>
      <div className='ac-panel h-28'>
        <p><span className='text'>{answer}</span></p>
      </div>
    </div>
  )
}

export default function Faq (props) {
  const accordionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    /* eslint-disable no-unused-vars */
    const Acc = new Accordion(accordionRef.current, {
      duration: 200
    })
  }, [])

  const handleScroll = () => {
    if (contentRef) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='absolute'>
      <Baner title='FAQ' color='#2BA24C' handleScroll={handleScroll} />
      <div className='faq font-sora pt-28' ref={contentRef}>
        <div className='' ref={accordionRef}>
          <Accordian
            color='yellow'
            question='Do I need to pay any money to register for the Hackathon?'
            answer='No. You do not have to pay anything to anyone to register yourself for any Hackathon on HackerEarth.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='pink'
            question='Do I need to have any specific qualifications to be a participant for the Hackathon?'
            answer='If you love to code, you are more than welcome to participate in the Hackathon.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='purple'
            question='Is it necessary for all participants to belong to the same university?'
            answer='No, there are no restrictions regarding universities. Your team can have members from different universities across the globe!'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='yellow'
            question='I’m interested to participate but I am unable to find a team. What should I do?'
            answer='You can try finding like minded people on our discord server.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='pink'
            question='How do I submit what I have made for the Hackathon?'
            answer='You have to develop the application on your local system and add your code to a GitHub repository and submit its link. Update the ReadMe with all the details about your application and instructions to run the code.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='purple'
            question='Do we need to have the entire idea fully working?'
            answer='The entire idea need not be fully implemented however, the submission should be functional so that it can be reviewed by the judges.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='yellow'
            question='How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas?'
            answer='You have to develop the application on your local system and add your code to a GitHub repository and submit its link. Update the ReadMe with all the details about your application and instructions to run the code.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='pink'
            question='Does one have to be online and available for the entire duration of the Hackathon?'
            answer='No, one does not need to be online for the entire duration. You can develop the application on your local system based on the given themes and then submit it on HackerEarth, on the specific challenge page.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='purple'
            question='Since there is no specific technology mentioned, are there any restrictions on using several pre-built libraries?'
            answer='There is no restriction to use any language, technology stack, or libraries. You can use any of them to create a web/mobile application.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='yellow'
            question='Do I need to give a demo for the product that I have built?'
            answer="If you want you can submit a small presentation or video that demos your submission, however, it's not mandatory, and only good to have. In case you are one of the winners, you might be invited to demo your application details of which will be shared with sufficient advance notice."
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='pink'
            question="A fully developed application needs to have a proper database for persistent data storage. Since it's online, is it accepted to show only the prototype of it?"
            answer="Yes, it's absolutely fine to submit just the prototype. You can develop the application on your local machine and submit just the source code along with the instructions to run."
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='purple'
            question='If it is a team submission, does that mean all team members will have access to work at the same time?'
            answer='Yes, all team members can log in from their account and do application submission on HackerEarth.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='yellow'
            question='Who will own the IP (Intellectual Property) Rights to the product that I have built?'
            answer='The developer/developers of the web/mobile application will have all rights and own the IP of the product. However, all code needs to be in the public domain (open source) so that it can be evaluated by the judges.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='pink'
            question='If I already applied on Devfolio do I have to apply again?'
            answer='Yes, because of unforeseen circumstances we had to shift to HackerEarth. You will be an eligible participant only if you register on HackerEarth.'
            darkTheme={props.darkTheme}
          />
          <Accordian
            color='purple'
            question='Do we have to miss classes on 15th March, Monday?'
            answer='No, On Duty attendance will be provided to all VIT participants on the 15th.'
            darkTheme={props.darkTheme}
          />
        </div>
      </div>
    </div>
  )
}
