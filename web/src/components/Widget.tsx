import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget () {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  // function toggleWidgetVisibility(){
  //   setIsWidgetOpen(!isWidgetOpen)
  // }
  
  return ( 
  <Popover className='chat-position'>
    <Popover.Panel>
      <WidgetForm />
    </Popover.Panel>

    <Popover.Button className="button group">
      <ChatTeardropDots className="chat-icon" />
        <span className='chat-box'>
          <span className='chat-text'>
            Feedback
          </span>
        </span>
    </Popover.Button>
  </Popover>
  )
}