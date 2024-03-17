import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import Button from './Button';

const Modal = ({buttonText, children}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="inset-0 flex items-center justify-center mr-5">
				<Button
					color="lime"
					text={buttonText}
					onClick={() => setOpen(true)}
				/>
      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          onClose={() => setOpen(false)}
          className="fixed inset-0 z-10 overflow-y-auto"
        >
          <div className="modal">
            {children}
           
            <div className="mt-4">
							<Button
								color="red"
								text="Close"
								onClick={() => setOpen(false)}
							/>
            </div>
       
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal